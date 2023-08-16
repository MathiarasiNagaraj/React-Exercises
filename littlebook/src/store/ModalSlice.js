import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    isshowMemberModal: false,
    isaddNewBlogModal: false,
    isshowWarningModal: false,
    warningMessage: "",
    warningType: "",
  },
  reducers: {
    showMemberModal(state) {
      state.isshowMemberModal = true;
    },
    hideMemberModal(state) {
      state.isshowMemberModal = false;
    },
    showAddNewBlogModal(state) {
      state.isaddNewBlogModal = true;
    },
    hideAddNewBlogModal(state) {
      state.isaddNewBlogModal = false;
    },
    showWarningModal(state, action) {
   
      const { message, type } = action.payload;

        state.warningType = type;
        state.warningMessage = message;
        state.isshowWarningModal = true;
    },
    closeWarningModal(state) {
      state.warningMessage = "";
        state.isshowWarningModal = false;
        console.log("hgk",state.isshowWarningModal)
    },
  },
});
export const ModalReducer = ModalSlice.reducer;
export const ModalAction = ModalSlice.actions;
