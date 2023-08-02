import React, { useState } from 'react'
import styles from './Header.module.scss'
import { LOGO } from '../../constants/Home'
import{NavLink} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../auth/AuthContext'
const Header = () => {
  const { user } = useAuthContext();

  return (
      <div className={styles["header"]}>
          <div className={styles["logo"]}>
              <img src={ LOGO.url} alt={LOGO.alt} />
          </div>
      <Navbar />
      <div className={styles["user"]}>
   {!user.userEmail?<NavLink to="/login">LOGIN</NavLink >:<>Hi {user.userEmail} | <NavLink to="/">LOGOUT </NavLink></>}

      </div>
    </div>
  )
}

export default Header