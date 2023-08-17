import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./BlogArticle.module.scss";
import ImageBox from "../imageBox/ImageBox";
import Button from "../button/Button";
import { CANCEL, EDIT, SAVE } from "../../constants/ButtonConstant";
import InputBox from "../inputBox/InputBox";
import ContentBox from "../contentBox/ContentBox";
import { useDispatch, useSelector } from "react-redux";

import { ModalAction } from "../../store/ModalSlice";
import { BlogAction } from "../../store/BlogSlice";
import { NO_BLOGS, WARNING } from "../../constants/GeneralConstant";


const BlogArticle = (props) => {
  const {isAllFilterUnchecked}=props
  const selectedBlog = useSelector(state => state.blog.selectedBlog)
  console.log(selectedBlog);
  const { title, type, details, photo, id } = selectedBlog;
  const [EditedTitle, setEditedTitle] = useState(title);
  const [EditedContent, setEditedContent] = useState(details);
  const editMode = useSelector((state) => state.blog.isEditMode);
  const allBlogs = useSelector((state) => state.blog.AllBlogs);
  const dispatch = useDispatch();

  //to set edited title
  const onTitleChangleHandler = (value) => {
    setEditedTitle(value);
  };
  // to set edited content
  const onContentChangeHandler = (value) => {
    setEditedContent(value);
  };
  // to cancel editing
  const onCancelHandler = () => {
    dispatch(BlogAction.setEditMode(false)); 
  }
//form handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const editedBlog = {
      title:EditedTitle,
      details: EditedContent,
      id: id,
    };
    const titleWordsCount = editedBlog.title.split(" ").length;
    const contentWordsCount =editedBlog.details.split(" ").length;
    const validation = {
      isValid: true,
      message:""
}

    const exist = allBlogs.some((blog) => blog.title === title &&blog.id!==id );

    if (!exist) {
     
      if (editedBlog.title.length < 1 || titleWordsCount > 20) {
  
      validation.isValid = false
      validation.message=WARNING.title
      }
      else if (contentWordsCount < 10 || contentWordsCount > 200) { 
        validation.isValid = false
        validation.message=WARNING.content
      }
    }
    else {
      validation.isValid = false
      validation.message=WARNING.title_exist
    }


    if (!validation.isValid) {

      let data = {
        message: validation.message,
        type:"form"
      }
      dispatch(ModalAction.showWarningModal(data));
    } else {
          //changing edit mode and passing edited data to reducer

    dispatch(BlogAction.edit(editedBlog));
    dispatch(BlogAction.setEditMode(false));
    }

  };
  //toggling to edit mode
  const changeEditMode = () => {
    setEditedTitle(title);
    setEditedContent(details);
    dispatch(BlogAction.setEditMode(true));
  };

  return (
  
    <>
      {isAllFilterUnchecked ? 
        <div className={styles["fallback"]}>
          {NO_BLOGS.message}
      </div> :
        <div className={styles["blog-article"]}>
          <ImageBox src={photo} alt={title} styleName="blog" />
          {!editMode ? (
            <>
              <h1>{title}</h1>
              <p>{details}</p>

              <Button
                name={EDIT.name}
                styleName="edit-btn"
                onClick={changeEditMode}
              />
            </>
          ) : (
            <form className={styles["edit-form"]} onSubmit={onSubmitHandler}>
              <InputBox
                value={EditedTitle}
                styleName="edit-blog-title"
                onChange={onTitleChangleHandler}
              />
              <ContentBox
                value={EditedContent}
                styleName="edit-blog-content"
                onChange={onContentChangeHandler}
              />
              <div className={styles["buttons"]}>
                <Button
                  name={CANCEL.name}
                  styleName="edit-btn"
                  onClick={onCancelHandler}
                />
                <Button name={SAVE.name} styleName="save-btn" />
              </div>
            </form>
          )}
        </div>}
      </>
  );
};



export default BlogArticle;
