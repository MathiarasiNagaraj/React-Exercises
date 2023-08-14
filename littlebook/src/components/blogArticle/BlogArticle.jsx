import React from 'react'
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
  const { title, type, details, photo } = props.blog;
  const isEdit = useSelector(state => state.blog.isEditMode);
  const onChangleHandler = () => {
    
  }
  const dispatch = useDispatch();
  const onEditHandler = () => {
    dispatch(BlogAction.toggleEdit());
  }
  return (
    <div className={styles["blog-article"]}>
      <ImageBox src={photo} alt={title} styleName="blog" />
      {!isEdit ?
        <>
      <h1>{title}</h1>
      <p>{details}</p>
      
          <Button name={EDIT.name} styleName="edit-btn" onClick={onEditHandler} />
          </>
        :
        <form className={styles["edit-form"]}>
      
          <InputBox value={title} styleName="edit-blog-title" onChange={onChangleHandler} />
          <ContentBox value={details} styleName="edit-blog-content"  onChange={onChangleHandler} />
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