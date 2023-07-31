import React from 'react'
import { useAuthContext } from '../../auth/AuthContext'
import { NAV_LINKS } from '../../constants/Navbar'
import Navlink from '../navlink/Navlink'
import styles from './Navbar.module.scss'
const Navbar = () => {
    const nav = NAV_LINKS.map(item => <Navlink data={item} key={ item} />)
  return (
      <nav className={styles["navbar"]}>
  {nav}
   </nav> 
  )
}

export default Navbar