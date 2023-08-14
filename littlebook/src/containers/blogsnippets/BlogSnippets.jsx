import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlogSnippets.module.scss'
import SearchBox from '../../components/searchBox/SearchBox'
import Button from '../../components/button/Button'
import { NEW } from '../../constants/ButtonConstant'
import BlogSnippetCard from '../../components/blogSnippetCard/BlogSnippetCard'
import { useDispatch, useSelector } from 'react-redux'
import { ModalAction } from '../../store/ModalSlice'
import { BlogAction } from '../../store/BlogSlice'

const BlogSnippets = props => {
    const { blogs } = props
    
    const onBlogSelectHandler = (data) => {
       dispatch(BlogAction.changeSelectedBlog(data))
   }
    const blogsnippets = blogs.slice().reverse().map((blog) => <BlogSnippetCard  onClick={onBlogSelectHandler} content={blog} key={blogs.indexOf(blog) } />)
    const theme = useSelector(state => state.theme.mode);
    const dispatch = useDispatch();
    const onAddNewBlogHandler = () => {
    dispatch(ModalAction.showAddNewBlogModal())
    }

  return (
      <div className={`${styles["blog-snippets"]} ${styles[theme]}`}>
          <div className={styles["blog-search"]}>
              <SearchBox />
              <Button name={NEW.name} styleName="add-btn" onClick={ onAddNewBlogHandler} />
          </div>
          <div className={styles["blog-list"]}>
              {blogsnippets}
          </div>

    </div>
  )
}

BlogSnippets.propTypes = {}

export default BlogSnippets