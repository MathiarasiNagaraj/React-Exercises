import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlogSnippetCard.module.scss'
import { convertToUpperCase } from '../../utils/util';
import { useSelector } from 'react-redux';

const BlogSnippetCard = props => {
  const { title, details, type } = props.content;
  const theme = useSelector(state => state.theme.mode);
  return (
    <div className={`${styles["blog-snippet"]}  ${styles[theme]}`}>
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