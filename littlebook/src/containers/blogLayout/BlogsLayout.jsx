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
const BlogsLayout = props => {



  const blogs = useSelector(state => state.blog.blogs);
  const selectedBlog = useSelector(state => state.blog.selectedBlog)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (blogs.length > 0) {
      setLoading(false);
  }
  },[blogs])
 

  return (
    <div className={styles["blogs"]}>
      {loading ?
        <div className={styles["loader"]}>
        <Bars

          color="#ffffff"
          ariaLabel="bars-loading"
          visible={true}
        />{" "}
      </div>
      :
        <BlogSnippets blogs={blogs} />}
      <BlogArticle blog={selectedBlog}/>
    </div>
  )
}

BlogsLayout.propTypes = {}

export default BlogsLayout