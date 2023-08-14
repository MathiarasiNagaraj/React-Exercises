import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
    name: 'Blog',
    initialState: {
        blogs: [],
        searchTerm: "",
        filterType:[]
    },
    reducers: {
        fetch(state) {
            
        },
        add(state,action) {
            
        },
        edit(state, action) {
            
        },
        filter(state, action) {
            
        },
        search(state, action) {
            
        }

    }
})

export const BlogReducer = BlogSlice.reducer;
export const BlogAction = BlogSlice.actions;