import React from 'react'
import NavigationLink from "../../Components/NavigationLink/NavigationLink";
import { MENUITEMS } from "../../constant/components";
import styles from "./Navbar.module.css"

function Navbar() {
  const NavLinks=MENUITEMS.map((item) => (
    <NavigationLink
      tabName={item.tabName}
      status={item.active}
      key={item.tabName}
    ></NavigationLink>
  ))
  return (
    <ul className={styles.navbar}>
    {NavLinks}
  </ul>
  )
}

export default Navbar