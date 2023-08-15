import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BlogArticle.module.scss'
import ImageBox from '../imageBox/ImageBox'
import Button from '../button/Button'
import { CANCEL, EDIT, SAVE } from '../../constants/ButtonConstant'
import InputBox from '../inputBox/InputBox'
import ContentBox from '../contentBox/ContentBox'
import { useDispatch, useSelector } from 'react-redux'
import { BlogAction } from '../../store/BlogSlice'

const BlogArticle = props => {
  const { title, type, details, photo ,id} = props.blog;
  const isEdit = useSelector(state => state.blog.isEditMode);
  const [isEditMode, setisEditMode] = useState(false);
  const [EditTitle, setTitle] = useState(title);
  const [EditContent, setContent] = useState(details);
  const validation = useSelector(state => state.blog.validation);
  const dispatch = useDispatch();
  useEffect(() => {
    setisEditMode(false)

  },[props])
  const onTitleChangleHandler = (value) => {
    setTitle(value);
    
  }
  const onContentChangeHandler = (value) => {
    setContent(value);

  }
  const onEditHandler= () => {
    
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const editedBlog = {
      title: EditTitle,
      details: EditContent,
      id:id
    }
    dispatch(BlogAction.edit(editedBlog));
    setisEditMode(false);
    

    
  }
  const changeEditMode = () => {
    setTitle(title);
    setContent(details);
    setisEditMode(true);
  }

  return (
    <div className={styles["blog-article"]}>
      <ImageBox src={photo} alt={title} styleName="blog"  />
      {!isEditMode ?
        <>
      <h1>{title}</h1>
      <p>{details}</p>
      
          <Button name={EDIT.name} styleName="edit-btn" onClick={changeEditMode} />
          </>
        :
        <form className={styles["edit-form"]}  onSubmit={onSubmitHandler}>
      
          <InputBox value={EditTitle} styleName="edit-blog-title" onChange={onTitleChangleHandler} />
          <ContentBox value={EditContent} styleName="edit-blog-content"  onChange={onContentChangeHandler} />
          <div className={styles["buttons"]}>
          <Button name={CANCEL.name} styleName="edit-btn" onClick={onEditHandler} />
            <Button name={SAVE.name} styleName="save-btn" />
            </div>
        </form>}
    </div>
  )
}


BlogArticle.propTypes = {}

export default BlogArticle