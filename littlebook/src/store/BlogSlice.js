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
        
         
                if (!state.filterType.includes(newBlog.type)) {
                
                    state.filterType.push( newBlog.type );
                   
                }
             
                  
        
        
            
        },
        edit(state, action) {
            
        },
        filter(state, action) {
            
        },
        search(state, action) {
            const searchFilteredBlogs = [];
            const searchTerm = action.payload;
            console.log( action.payload==='', "search in slice");
            
            state.blogs.forEach(blog => {
                console.log(blog.title," ",blog.details)
                if (blog.title.includes(searchTerm) || blog.details.includes(searchTerm))
                {
                    searchFilteredBlogs.push(blog);
                    }
            })
            console.log(searchFilteredBlogs);
           
            if (searchTerm === '') {
                console.log("calling")
                state.blogs = state.blogs;
            }
            else {
                console.log("calling else")
                state.blogs = searchFilteredBlogs;
            }
            

            
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