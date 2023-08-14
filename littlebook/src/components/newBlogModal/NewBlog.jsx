import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './NewBlog.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ModalAction } from '../../store/ModalSlice'
import InputBox from '../inputBox/InputBox'
import ContentBox from '../contentBox/ContentBox'
import { ADD_NEW_BLOG } from '../../constants/NewBlogConstant'
import Button from '../button/Button'
import { ADD } from '../../constants/ButtonConstant'
import { BlogAction } from '../../store/BlogSlice'

const NewBlog = props => {
  const theme = useSelector(state => state.theme.mode);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const titleRef = useRef();
  const contentRef = useRef();
  const onContentChangeHandler = (data) => {
    setContent(data);
  }
  const onTitleChangeHandler = (data) => {
    setTitle(data);
  }
   const onModalCloseHandler = () => {
    // dispatch(ModalAction.hideAddNewBlogModal());
   }
  const onAddNewBlogFormHandler = (e) => {
    e.preventDefault();
    const newBlog = {
      title: title,
      details: content,
      type:"local"
    }
    dispatch(BlogAction.add(newBlog)); 

    dispatch(ModalAction.hideAddNewBlogModal());
  }

  return (
    <div className={styles["modal-overlay"]} onClick={onModalCloseHandler}>
 <div className={`${styles["member-modal"]} ${styles[theme]}`}>
        <h1>{ ADD_NEW_BLOG.title}</h1>
      <form className={styles["newBlog-form"]} onSubmit={onAddNewBlogFormHandler} >

          <InputBox placeHolder={ADD_NEW_BLOG.name} styleName="newBlog-box" ref={titleRef} onChange={onTitleChangeHandler} />
          <ContentBox placeHolder={ADD_NEW_BLOG.description} styleName="newBlog-text-box" ref={contentRef} onChange={onContentChangeHandler} />
          
          <Button name={ADD.name} styleName="add-btn" onClick={()=>{}} />
        </form>
      </div>

    </div>
  )
}

NewBlog.propTypes = {}

export default NewBlog