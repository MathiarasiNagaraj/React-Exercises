import React from 'react'
import PropTypes from 'prop-types'
import styles from './BlogSnippets.module.scss'
import SearchBox from '../../components/searchBox/SearchBox'
import Button from '../../components/button/Button'
import { NEW } from '../../constants/ButtonConstant'
import BlogSnippetCard from '../../components/blogSnippetCard/BlogSnippetCard'

const BlogSnippets = props => {
    const{blogs}=props
    const blogsnippets = blogs.map((blog) => <BlogSnippetCard content={blog} />)
  return (
      <div className={styles["blog-snippets"]}>
          <div className={styles["blog-search"]}>
              <SearchBox />
              <Button name={NEW.name}  styleName="add-btn"/>
          </div>
          <div className={styles["blog-list"]}>
              {blogsnippets}
          </div>

    </div>
  )
}

BlogSnippets.propTypes = {}

export default BlogSnippets