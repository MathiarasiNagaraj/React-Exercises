import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlogSnippetCard.module.scss'
import { convertToUpperCase } from '../../utils/util';

const BlogSnippetCard = props => {
  const { title, details, type } = props.content;

  return (
    <div className={styles["blog-snippet"]}>
      <h1>{title}</h1>
      <h3>{convertToUpperCase(type)}</h3>
      <p>{ details}</p>
    </div>
  )
}

BlogSnippetCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    
}).isRequired

}

export default BlogSnippetCard