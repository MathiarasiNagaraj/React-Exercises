import { configureStore } from "@reduxjs/toolkit";
import { BlogReducer } from "./BlogSlice";
import { ModalReducer } from "./ModalSlice";
import { ThemeReducer } from "./ThemeSlice";

const store = configureStore({
  reducer: {
        theme: ThemeReducer,
        modal: ModalReducer,
      blog:BlogReducer
  },
});
export default store;
