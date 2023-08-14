import React from 'react'
import PropTypes from 'prop-types'
import styles from './NewBlog.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { ModalAction } from '../../store/ModalSlice'
import InputBox from '../inputBox/InputBox'
import ContentBox from '../contentBox/ContentBox'
import { ADD_NEW_BLOG } from '../../constants/NewBlogConstant'

const NewBlog = props => {
  const theme = useSelector(state => state.theme.mode);
  const dispatch= useDispatch();
   const onModalCloseHandler = () => {
     dispatch(ModalAction.hideAddNewBlogModal());
   }

  return (
    <div className={styles["modal-overlay"]} onClick={onModalCloseHandler}>
 <div className={`${styles["member-modal"]} ${styles[theme]}`}>
        <h1>{ ADD_NEW_BLOG.title}</h1>
      <form className={styles["newBlog-form"]}> 

          <InputBox placeHolder={ADD_NEW_BLOG.name} />
          <ContentBox placeHolder={ ADD_NEW_BLOG.description} />
        </form>
      </div>

    </div>
  )
}

NewBlog.propTypes = {}

export default NewBlog