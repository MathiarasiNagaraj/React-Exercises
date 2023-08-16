import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./BlogArticle.module.scss";
import ImageBox from "../imageBox/ImageBox";
import Button from "../button/Button";
import { CANCEL, EDIT, SAVE } from "../../constants/ButtonConstant";
import InputBox from "../inputBox/InputBox";
import ContentBox from "../contentBox/ContentBox";
import { useDispatch, useSelector } from "react-redux";
import { BlogAction } from "../../store/BlogSlice";

const BlogArticle = () => {
  const selectedBlog = useSelector(state => state.blog.selectedBlog)
  const { title, type, details, photo, id } = selectedBlog;
  const [EditTitle, setTitle] = useState(title);
  const [EditContent, setContent] = useState(details);
  const editMode = useSelector((state) => state.blog.isEditMode);

  const dispatch = useDispatch();

  //to set edited title
  const onTitleChangleHandler = (value) => {
    setTitle(value);
  };
  // to set edited content
  const onContentChangeHandler = (value) => {
    setContent(value);
  };
  // to cancel editing
  const onCancelHandler = () => {
    dispatch(BlogAction.setEditMode(false)); 
  }
//form handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const editedBlog = {
      title: EditTitle,
      details: EditContent,
      id: id,
    };
    //changing edit mode and passing edited data to reducer
    dispatch(BlogAction.edit(editedBlog));
    dispatch(BlogAction.setEditMode(false));
  };
  //toggling to edit mode
  const changeEditMode = () => {
    setTitle(title);
    setContent(details);
    dispatch(BlogAction.setEditMode(true));
  };

  return (
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
            value={EditTitle}
            styleName="edit-blog-title"
            onChange={onTitleChangleHandler}
          />
          <ContentBox
            value={EditContent}
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
    </div>
  );
};



export default BlogArticle;
