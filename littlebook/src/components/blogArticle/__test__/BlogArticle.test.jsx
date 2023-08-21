
import { Provider, useSelector } from "react-redux";
import BlogArticle from "../BlogArticle";
import store, { store } from "../../../store/index";
import { render } from '@testing-library/react';
import { configureStore } from "@reduxjs/toolkit";
import { BlogAction, BlogReducer } from "../../../store/BlogSlice";


const isFilterEmpty = false;

describe('Blog article', () => {
    const initialState = {
        blog: {
          selectedBlog: {
            title: 'Test Title',
            details: 'Test Details',
            photo: 'test.jpg',
            id: 1,
          },
          isEditMode: false,
          AllBlogs: [],
        },
      };

    const mockStore = configureStore({
          reducer:BlogReducer
      });

    test("article display", () => {

        let store = store.getState();
        console.log(store)
        const { getByText } = render(
            <Provider store={mockStore}>
                <BlogArticle isAllFilterUnchecked={isFilterEmpty} />
            </Provider>
        );
        const titleElement = getByText("Test Title");
        const contentElement = getByText("Test Content");

        expect(titleElement).toBeInTheDocument();
        expect(contentElement).toBeInTheDocument();
    })
}
);
