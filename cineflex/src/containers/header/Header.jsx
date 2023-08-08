import React, { useState } from 'react'
import styles from './Header.module.scss'
import { LOGO } from '../../constants/Home'
import{Link, NavLink,useLocation} from "react-router-dom"
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../auth/AuthContext'

/**
 * A component that displays Header component and render navbar
 * @returns {JSX.Element} Header component.
 */

const Header = () => {
  const { user, setUser } = useAuthContext();
  const location = useLocation();
  //on logout clearing the user state and localstorage 
  const onLogoutHandler = () => {
    setUser(() => ({
      userEmail: "",
      userPassword: "",
      userName:"",
    }));
    localStorage.setItem("islogged", false);
    localStorage.setItem("userName", null);
}
  return (
      <div className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link to="/">
          <img src={LOGO.url} alt={LOGO.alt} />
          </Link>
          </div>
      <Navbar />
      <div className={styles["user"]}>
      
   {location.pathname!=='/login'&&(!user.userName?<NavLink to="/login">LOGIN</NavLink >:<>Hi {user.userName} | <NavLink to="/" onClick={onLogoutHandler}>LOGOUT </NavLink></>)}

      </div>
    </div>
  )
}

export default Header