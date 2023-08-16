import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    blogs: [],
    AllBlogs: [],
    searchTerm: "",
    filterType: [],
    isEditMode: false,
    selectedBlog: {},
  
  },
  reducers: {
    //initially fetch data from API and Store
    store(state, action) {
      const filtertypes = [];
      let blogs = action.payload;
      //adding id to all blogs to identify 
      blogs = blogs.map((obj, index) => ({
        ...obj,
        id: index + 1,
      }));
      //blogs for blog snippets
      // all blogs to store whole blogs
      state.blogs = blogs;
      state.AllBlogs = blogs;
      //to set first blog as selected blog for blog Article
      state.selectedBlog = state.blogs[0];

      //extracting type from blogs and adding in filter type without repeating
      state.blogs.map((blog) => {
        const exist = filtertypes.some((item) => item.type === blog.type);
        if (!exist) {
          //initially all blog should to chechked
          filtertypes.push({ type: blog.type, isChecked: true });
        }
      });
      state.filterType = filtertypes;
    },
    //adding new blog data
    add(state, action) {
      let newBlog = action.payload;
      //adding id as length+1 for new blog data
      newBlog = { ...newBlog, id: state.AllBlogs.length + 1 };
      state.blogs.push(newBlog);
      //adding type to filter type array
      const exist = state.filterType.some((item) => item.type === newBlog.type);
      if (!exist) {
        state.filterType.push({ type: newBlog.type, isChecked: true });
      }
      //pushing new blog to all blogs
      state.AllBlogs.push(newBlog);
 
    },
    //editing blog content
    edit(state, action) {
      const { id, title, details } = action.payload;

      let initialState = state.AllBlogs;

      //overring title and details
      initialState = initialState.map((blog) => {
        if (blog.id === id) {
          return {
            ...blog,
            title: title,
            details: details,
          };
        }
        return blog;
      });

      //need to update selected blog also
      state.selectedBlog = initialState.find((blog) => blog.id == id);
      // updated blogs
      state.blogs = initialState;
      state.AllBlogs = initialState;
    },
    //filtering blog content
    filter(state, action) {
      const filteredBlogs = [];
      const { type, isChecked } = action.payload;
      
      //updating isChechked for filtertype
      state.filterType.forEach((item) => {
        if (item.type === type) item.isChecked = isChecked;
      });
      const initialState = state.AllBlogs;
      //from all blogs only displaying whose type is chechked
      initialState.forEach((blog) => {
        const exist = state.filterType.some(
          (item) => item.type === blog.type && item.isChecked === true
        );
        if (exist) filteredBlogs.push(blog);
      });
      state.blogs = filteredBlogs;
    },
    //searching blog data
    search(state, action) {
      const searchFilteredBlogs = [];
      const initialState = state.AllBlogs;
      let searchTerm = action.payload;
      searchTerm = searchTerm.toLowerCase();
      //fetching if title or details contains the search term
      initialState.forEach((blog) => {
        if (
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.details.toLowerCase().includes(searchTerm)
        ) {
          searchFilteredBlogs.push(blog);
        }
      });

      state.blogs = searchFilteredBlogs;
    },
//setting the edit mode for article
    setEditMode(state, action) {
      state.isEditMode = action.payload;
    },
    //changing the selected blogs
    changeSelectedBlog(state, action) {
      state.selectedBlog = action.payload;
    },
  },
});

export const BlogReducer = BlogSlice.reducer;
export const BlogAction = BlogSlice.actions;
