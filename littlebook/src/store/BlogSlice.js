import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
    name: 'Blog',
    initialState: {
        blogs: [],
        searchTerm: "",
        filterType:[],
        isEditMode: false,
        selectedBlog:{}
    },
    reducers: {
        store(state, action) {
        
            const filtertypes=[]
            state.blogs = action.payload;

            state.selectedBlog = state.blogs[0];
           

            state.blogs.map(blog => {
         
                if (!filtertypes.includes(blog.type)) {
                
                    filtertypes.push( blog.type );
                   
                }
             
                  
            })
            state.filterType = filtertypes;
          
            
        },
        add(state, action) {

            const newBlog = action.payload;
            state.blogs.push(newBlog);
            state.blogs.map(blog => {
         
                if (!state.filterType.includes(newBlog.type)) {
                
                    state.filterType.push( newBlog.type );
                   
                }
             
                  
            })
        
            
        },
        edit(state, action) {
            
        },
        filter(state, action) {
            
        },
        search(state, action) {
            
        },
        toggleEdit(state) {
            state.isEditMode = !state.isEditMode;
        },
        changeSelectedBlog(state, action) {
            state.selectedBlog = action.payload;
        }
        

    }
})

export const BlogReducer = BlogSlice.reducer;
export const BlogAction = BlogSlice.actions;