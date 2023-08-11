import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import styles from './BlogsLayout.module.scss'
import BlogArticle from '../../components/blogArticle/BlogArticle'
import BlogSnippets from '../blogsnippets/BlogSnippets'
import { getBlogs } from '../../services/data'

const BlogsLayout = props => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((data)=>setBlogs(data))
  }, []);


  return (
    <div className={styles["blogs"]}>
    <BlogSnippets  blogs={blogs}/>
      <BlogArticle blog={blogs.length>0&&blogs[0]}/>
    </div>
  )
}

BlogsLayout.propTypes = {}

export default BlogsLayout