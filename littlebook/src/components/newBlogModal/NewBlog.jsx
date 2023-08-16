import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./NewBlog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ModalAction } from "../../store/ModalSlice";
import InputBox from "../inputBox/InputBox";
import ContentBox from "../contentBox/ContentBox";
import { ADD_NEW_BLOG } from "../../constants/NewBlogConstant";
import Button from "../button/Button";
import { ADD } from "../../constants/ButtonConstant";
import { BlogAction } from "../../store/BlogSlice";

const NewBlog = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const allBlogs = useSelector((state) => state.blog.AllBlogs);
  const dispatch = useDispatch();

  //setting content on input changing
  const onContentChangeHandler = (data) => {
    setContent(data);
  };
 //setting title on input changing
  const onTitleChangeHandler = (data) => {
    setTitle(data);
  };
  //warning on clicking outside of form
  const onModalCloseHandler = () => {
    const data = {
      message: "Willing to Exit ?",
      type:"add"
    }
    dispatch(ModalAction.showWarningModal(data))
  };

  //form handler for adding new blog
  const onAddNewBlogFormHandler = async (e) => {
    e.preventDefault();
    const validation = {
      isValid: true,
      message: "",
    };
    const newBlog = {
      title: title,
      details: content,
      type: "local",
    };
    //validating form 
    //content should have more than 10 words
    //title should not reapting
    const contentWordsCount = content.split(" ").length;
    const exist = allBlogs.some((blog) => blog.title === title);
   
    if (!exist && contentWordsCount < 10) {
      validation.isValid = false;
      validation.message = "Content should contain minimum 10 words";
    } else if (exist) {
      validation.isValid = false;
      validation.message = "Title already exists";
    }
//if not valid pop warning modal else store new data
    if (!validation.isValid) {
      let data = {
        message: validation.message,
        type:"form"
      }
      dispatch(ModalAction.showWarningModal(data));
    } else {
      dispatch(BlogAction.add(newBlog));
      dispatch(ModalAction.hideAddNewBlogModal());
    }
  };

  return (
    <div className={styles["modal-overlay"]} onClick={onModalCloseHandler}>
      <div className={`${styles["member-modal"]} ${styles[theme]}`}
      onClick={(e) => e.stopPropagation()}
      >
        <h1>{ADD_NEW_BLOG.title}</h1>
        <form
          className={styles["newBlog-form"]}
          onSubmit={onAddNewBlogFormHandler}
        >
          <InputBox
            placeHolder={ADD_NEW_BLOG.name}
            styleName="newBlog-box"
            onChange={onTitleChangeHandler}
          />
          <ContentBox
            placeHolder={ADD_NEW_BLOG.description}
            styleName="newBlog-text-box"
            onChange={onContentChangeHandler}
          />

          <Button name={ADD.name} styleName="add-btn" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};



export default NewBlog;
