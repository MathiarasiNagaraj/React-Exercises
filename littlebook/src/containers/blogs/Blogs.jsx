import React from 'react'
import PropTypes from 'prop-types'
import BlogDetails from '../../components/blogDetails/BlogDetails'
import styles from './Blogs.module.scss'
const Blogs = props => {
  return (
         <div className={styles["blogs"]}>
          blogs
          <BlogDetails />
          </div>
  )
}

Blogs.propTypes = {}

export default Blogs