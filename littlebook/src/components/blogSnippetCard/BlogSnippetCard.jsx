import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from './BlogSnippetCard.module.scss'
import { convertToUpperCase } from '../../utils/util';
import { useSelector } from 'react-redux';



const BlogSnippetCard = props => {
  const { content, onClick } = props;
  const{type,title,details}=content
  const theme = useSelector(state => state.theme.mode);
  const selected = useSelector(state => state.blog.selectedBlog);
  //to  add style for selected card
  const isSelected = selected.title === content.title;

  return (
    <div className={`${styles["blog-snippet"]}  ${styles[theme]} ${isSelected&&styles["selected"]}`  } onClick={()=>onClick(content)}>
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
    
}).isRequired,
onClick:PropTypes.func.isRequired
}

export default BlogSnippetCard

