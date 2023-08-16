import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import styles from './BlogsLayout.module.scss'
import BlogArticle from '../../components/blogArticle/BlogArticle'
import BlogSnippets from '../blogsnippets/BlogSnippets'
import { getBlogs } from '../../services/data'
import { useDispatch, useSelector } from 'react-redux'
import { BlogAction } from '../../store/BlogSlice'
import { ModalAction } from '../../store/ModalSlice'
import { Bars } from "react-loader-spinner";
const BlogsLayout = () => {





 

  return (
    <div className={styles["blogs"]}>
  
        <BlogSnippets/>
      <BlogArticle/>
    </div>
  )
}



export default BlogsLayout