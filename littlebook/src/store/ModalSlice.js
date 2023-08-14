import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isshowMemberModal: false,
        isaddNewBlogModal:false,
    },
    reducers: {
        showMemberModal(state) {
            state.isshowMemberModal = true;
       
        },
        hideMemberModal(state) {
            state.isshowMemberModal= false;
        },
        showAddNewBlogModal(state) {
            state.isaddNewBlogModal = true;
        },
        hideAddNewBlogModal(state) {
            state.isaddNewBlogModal = false;
        }

    }
})
export const ModalReducer = ModalSlice.reducer;
export const ModalAction = ModalSlice.actions;