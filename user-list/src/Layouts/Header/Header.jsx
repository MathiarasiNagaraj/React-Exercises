import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className={styles.header}>
      <SearchBar></SearchBar>
      <Navbar></Navbar>
    </div>
  );
}
