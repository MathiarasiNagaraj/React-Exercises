import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BlogSnippets.module.scss";
import SearchBox from "../../components/searchBox/SearchBox";
import Button from "../../components/button/Button";
import { NEW } from "../../constants/ButtonConstant";
import BlogSnippetCard from "../../components/blogSnippetCard/BlogSnippetCard";
import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/ModalSlice";
import { BlogAction } from "../../store/BlogSlice";
import { NO_BLOGS } from "../../constants/GeneralConstant";


const BlogSnippets = (props) => {
  const { isAllFilterUnchecked }=props
    const blogs = useSelector(state => state.blog.blogs);
  const isEdit = useSelector((state) => state.blog.isEditMode);

    //on clicking card ,triggering selected card function 
  const onBlogSelectHandler = (data) => {
    dispatch(BlogAction.changeSelectedBlog(data));
  };

    //mapping blogs from reverse 
  const blogsnippets = blogs
    .slice()
    .reverse()
    .map((blog) => (
      <BlogSnippetCard
        onClick={onBlogSelectHandler}
        content={blog}
        key={blogs.indexOf(blog)}
      />
    ));
  const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();
    // on clicking new ,new blog modal should display
  const onAddNewBlogHandler = () => {
    dispatch(ModalAction.showAddNewBlogModal());
  };
    //when edit mode on mouse over ,popping up warning modal
  const onMouseOverHandler = () => {
    if (isEdit) {
      const data = {
        message: "Willing to Exit ?",
        type: "edit",
      };

      dispatch(ModalAction.showWarningModal(data));
    }
  };
  return (
   
      <div
        className={`${styles["blog-snippets"]} ${styles[theme]}`}
        onMouseEnter={onMouseOverHandler}
      >
  
    
            <div className={styles["blog-search"]}>
              <SearchBox />
              <Button
                name={NEW.name}
                styleName="add-btn"
                onClick={onAddNewBlogHandler}
              />
          </div>
      {isAllFilterUnchecked ? <div className={styles["fallback"]}>{ NO_BLOGS.message}</div> :
            <div className={styles["blog-list"]}>{blogsnippets}</div>
        }
      </div>

  );
};



export default BlogSnippets;
