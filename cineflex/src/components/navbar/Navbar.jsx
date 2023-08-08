import React from "react";
import { useAuthContext } from "../../auth/AuthContext";
import { NAV_LINKS } from "../../constants/Navbar";
import Navlink from "../navlink/Navlink";
import styles from "./Navbar.module.scss";

/**
 * A navigation bar component that provides links and options for navigation.
 * @returns {JSX.Element} Navbar component.
 */

const Navbar = () => {
  const nav = NAV_LINKS.map((item) => <Navlink data={item} key={item.name} />);
  return <nav className={styles["navbar"]}>{nav}</nav>;
};

export default Navbar;
