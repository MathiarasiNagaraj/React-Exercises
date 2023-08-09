import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../../containers/sidebar/Sidebar'
import Blogs from '../../containers/blogs/Blogs'
import styles from './Home.module.scss'
const Home = props => {
  return (
      <div className={styles["home"]}>
          <Sidebar />
          <Blogs />
          
    </div>
  )
}

Home.propTypes = {}

export default Home