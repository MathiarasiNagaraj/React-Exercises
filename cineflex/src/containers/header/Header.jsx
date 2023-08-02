import React, { useState } from 'react'
import styles from './Header.module.scss'
import { LOGO } from '../../constants/Home'
import{Link, NavLink} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../auth/AuthContext'

/**
 * A component that displays Header component and render navbar
 * @returns {JSX.Element} Header component.
 */

const Header = () => {
  const { user } = useAuthContext();

  return (
      <div className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link to="/">
          <img src={LOGO.url} alt={LOGO.alt} />
          </Link>
          </div>
      <Navbar />
      <div className={styles["user"]}>
   {!user.userEmail?<NavLink to="/login">LOGIN</NavLink >:<>Hi {user.userEmail} | <NavLink to="/">LOGOUT </NavLink></>}

      </div>
    </div>
  )
}

export default Header