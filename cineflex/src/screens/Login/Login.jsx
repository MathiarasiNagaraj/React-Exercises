import React from 'react'

import LoginForm from '../../components/loginForm/LoginForm'
import styles from './Login.module.scss'
const Login = () => {
  return (
      <div className={styles["login-page"]}>
          <LoginForm/>
    </div>
  )
}



export default Login