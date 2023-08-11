import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../../containers/sidebar/Sidebar'

import styles from './Home.module.scss'
import BlogsLayout from '../../containers/blogLayout/BlogsLayout'
const Home = props => {


  return (
      <div className={styles["home"]}>
          <Sidebar />
      <BlogsLayout/>
          
    </div>
  )
}

Home.propTypes = {}

export default Home