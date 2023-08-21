import { createSlice } from "@reduxjs/toolkit";
import { WARNING } from "../constants/GeneralConstant";

const BlogSlice = createSlice({
  name: "Blog",
  initialState: {
    blogs: [],
    AllBlogs: [],
    searchTerm: "",
    filterType: [],
    isEditMode: false,
    selectedBlog: {},
    isValid: true,
    message: "",
    filterEmpty: false,
    selectedBlogInEdit:{}
  },
  reducers: {
    //initially fetch data from API and Store
    store(state, action) {
      const filtertypes = [];
      let blogs = action.payload;
      //adding id to all blogs to identify
      blogs = blogs?.map((obj, index) => ({
        ...obj,
        id: index + 1,
      }));
      //blogs for blog snippets
      // all blogs to store whole blogs
      state.blogs = blogs;
      state.AllBlogs = blogs;
      //to set first blog as selected blog for blog Article
      state.selectedBlog = state.blogs[state.AllBlogs?.length - 1];

      //extracting type from blogs and adding in filter type without repeating
      state.blogs.map((blog) => {
        const exist = filtertypes?.some((item) => item.type === blog.type);
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
      //random image
      let randomImage = "https://source.unsplash.com/random/800x600";
      newBlog = {
        ...newBlog,
        id: state.AllBlogs.length + 1,
        photo: randomImage,
      };
 //pushing new blog to all blogs
 state.AllBlogs.push(newBlog);
 state.blogs.push(newBlog);
      //adding type to filter type array
      const exist = state.filterType.some((item) => item.type === newBlog.type);

      //if the type is not in filtertype then add and if filterEmpty is true ,false it
      //and make current blog as selected
      if (!exist) {
        state.filterType.push({ type: newBlog.type, isChecked: true });
        state.selectedBlog = state.AllBlogs[newBlog.id - 1];
        if (state.filterEmpty) {
          state.filterEmpty = false;
        }
      }
     

      const isChecked = state.filterType.some(
        (item) => item.type === newBlog.type && item.isChecked === true
      );
      if (exist && isChecked) {
        state.selectedBlog = state.AllBlogs[newBlog.id - 1];
      }
    },
    //editing blog content
    edit(state, action) {
      const { id, title, details } = action.payload;

      let initialState = state.AllBlogs;

      //  overring title and details
      initialState = initialState?.map((blog) => {
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
      state.selectedBlog = initialState?.find((blog) => blog.id == id);
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
      const allTypesUnchecked = state.filterType.every(
        (item) => !item.isChecked
      );

     // console.log(allTypesUnchecked, "all");

      if (!allTypesUnchecked) {
        state.filterEmpty = false;

        const initialState = state.AllBlogs;
        //from all blogs only displaying whose type is chechked
        initialState.forEach((blog) => {
          const exist = state.filterType.some(
            (item) => item.type === blog.type && item.isChecked === true
          );
          if (exist) filteredBlogs.push(blog);
        });
        state.blogs = filteredBlogs;
        state.selectedBlog = state.blogs[state.blogs.length - 1];
      } else {
        state.filterEmpty = true;
        state.blogs = [];
      }
    },
    //searching blog data
    search(state, action) {
      const searchFilteredBlogs = [];
    //  console.log(state.blogs);
      
      const filteredBlogs = [];
      state.AllBlogs.forEach((blog) => {
        const exist = state.filterType.some(
          (item) => item.type === blog.type && item.isChecked === true
        );
        if (exist) filteredBlogs.push(blog);
      })
      const initialState = filteredBlogs;
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
      if (searchFilteredBlogs.length === 0) {
        state.filterEmpty = true;
      } else {
        state.blogs = searchFilteredBlogs;
        state.selectedBlog = state.blogs[state.blogs.length - 1];
        state.filterEmpty = false;
      }
    },

    //setting the edit mode for article
    setEditMode(state, action) {
      state.isEditMode = action.payload;
    },
    //changing the selected blogs
    changeSelectedBlog(state, action) {
      state.selectedBlog = action.payload;
    },
    changeSelectedBlogInEdit(state, action) {
      state.selectedBlogInEdit = action.payload;
    }
  },
});

export const BlogReducer = BlogSlice.reducer;
export const BlogAction = BlogSlice.actions;
