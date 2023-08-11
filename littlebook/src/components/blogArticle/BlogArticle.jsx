import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlogArticle.module.scss'
import ImageBox from '../imageBox/ImageBox'

const BlogArticle = props => {
  const{title,type,details,photo}=props.blog
  return (
    <div className={styles["blog-article"]}>
      <ImageBox src={photo} alt={ title}  styleName="blog"/>
      <h1>{title}</h1>
      <p>{ details}</p>
    </div>
  )
}

BlogArticle.propTypes = {}

export default BlogArticle