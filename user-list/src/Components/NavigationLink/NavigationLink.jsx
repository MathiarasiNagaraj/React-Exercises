import React from "react";
import styles from "./NavigationLink.module.css";

function NavigationLink(props) {
  return (
    <li className={`${styles.navListItem} ${props.status && styles.active}`}>
      {props.tabName}
    </li>
  );
}

export default NavigationLink;
