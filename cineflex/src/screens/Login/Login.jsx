import React from 'react'

import LoginForm from '../../components/loginForm/LoginForm'
import styles from './Login.module.scss'

/**
 * A component that displays a login page.
 * @returns {JSX.Element} Login component.
 */


const Login = () => {
  return (
      <div className={styles["login-page"]}>
          <LoginForm/>
    </div>
  )
}



export default Login