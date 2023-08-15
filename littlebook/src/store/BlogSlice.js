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
    validation: {}
  },
  reducers: {
    store(state, action) {
      const filtertypes = [];
      let blogs = action.payload;
      blogs = blogs.map((obj, index) => ({
        ...obj,
        id: index + 1,
      }));
      state.blogs = blogs
      state.AllBlogs = blogs;
      state.selectedBlog = state.blogs[0];

      state.blogs.map((blog) => {

        const exist = filtertypes.some((item) => item.type === blog.type)
        if (!exist) {
          filtertypes.push({ type: blog.type, isChecked: true });
        }
      });
      state.filterType = filtertypes;
    },
    add(state, action) {
      let newBlog = action.payload;
     newBlog= { ...newBlog ,id:state.AllBlogs.length+1};
      state.blogs.push(newBlog);
      const exist = state.filterType.some((item) => item.type === newBlog.type)
      if (!exist) {
        state.filterType.push({ type: newBlog.type, isChecked: true });
      }
      state.AllBlogs.push(newBlog);
   console.log(state.AllBlogs.length)
    },
    edit(state, action) {
      const { id, title, details } = action.payload;
      console.log(action.payload);
      let initialState = state.AllBlogs;
      initialState=  initialState.map(blog => {
        if (blog.id === id) {
          console.log(blog.id);
          return {
            ...blog,
            title: title,
            details: details

        
          }
        
        }
        return blog;
      });
 state.selectedBlog=initialState.find((blog)=>blog.id==id);
      state.blogs = initialState;
      state.AllBlogs = initialState;

    },
    filter(state, action) {
      const filteredBlogs = [];
      const { type, isChecked } = action.payload;
      console.log(type, isChecked);
      state.filterType.forEach((item) => {
        if (item.type === type)
          item.isChecked = isChecked;
      }
      )
      const initialState = state.AllBlogs;
      initialState.forEach(blog => {
        const exist = state.filterType.some((item) => item.type === blog.type && item.isChecked === true)
        if (exist)
          filteredBlogs.push(blog)
        
      })
      state.blogs = filteredBlogs;
    },
    validate(state, action) {
      const { title, details } = action.payload;
     

    },
    search(state, action) {
      const searchFilteredBlogs = [];
      const initialState = state.AllBlogs;
      const searchTerm = action.payload;

      initialState.forEach((blog) => {
        if (
          blog.title.includes(searchTerm) ||
          blog.details.includes(searchTerm)
        ) {
          searchFilteredBlogs.push(blog);
        }
      });

      state.blogs =  searchFilteredBlogs;
    },
    toggleEdit(state) {
      state.isEditMode = !state.isEditMode;
    },
    changeSelectedBlog(state, action) {
      state.selectedBlog = action.payload;
    },
  },
});

export const BlogReducer = BlogSlice.reducer;
export const BlogAction = BlogSlice.actions;
