import React from 'react'
import styles from './Error.module.scss'
const Error = () => {
  return (
      <div className={styles.errorPage}>
          <img src={'/assets/images/404-Errorpage.jpg' } />
          PAGE NOT FOUND 
          The page ,you are looking may doesn't exist or May have some error
    </div>
  )
}

export default Error