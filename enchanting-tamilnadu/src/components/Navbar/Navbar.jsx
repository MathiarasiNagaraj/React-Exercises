import React from "react";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../../constants/component";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Navbar.module.scss";

/**
 * 
 * @returns Navbar component
 */
const Navbar = () => {
  const list = MENU_ITEMS.map((item) => (
    <NavLinks list={item} key={item} />
  ));

  return (
    <div className={styles.header}>
      <Link to="/">
        <img
          src="assets/images/logo.png"
          className={styles.logo}
          alt="explorer-logo"
        />
      </Link>
      <ul className={styles.navbar}>{list}</ul>
    </div>
  );
};

export default Navbar;
