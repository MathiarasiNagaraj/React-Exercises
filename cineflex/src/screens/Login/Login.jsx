import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../../components/loginForm/LoginForm'
import styles from './Login.module.scss'
const Login = props => {
  return (
      <div className={styles["login-page"]}>
          <LoginForm/>
    </div>
  )
}

Login.propTypes = {}

export default Login