import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: 'Theme',
    initialState: {
        mode:'light'
    },
    reducers: {
        toggle(state)
        {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }

})

export const ThemeReducer = ThemeSlice.reducer;
export const ThemeAction = ThemeSlice.actions;