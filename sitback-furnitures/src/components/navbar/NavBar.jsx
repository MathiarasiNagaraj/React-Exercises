import React from "react";
import { NAVIGATION } from "../../constants/components";
import List from "../navlinks/List";

import styles from "./NavBar.module.scss";
/**
 *
 * @returns returns Navbar component
 */
const NavBar = () => {
  //map navigation links to NavLink component wrapped by Router Link
  const listItems = NAVIGATION.links.map((item) => (
    <List list={item.name} key={item.name} />
  ));

  return <nav className={styles.navbar}>{listItems}</nav>;
};

export default NavBar;
