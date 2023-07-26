import React from "react";
import InputBox from "../InputBox/InputBox";
import styles from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import { SEARCHINPUT } from "../../constant/components";

function SearchBar() {
  return (
    <div className={styles.searchBox}>
      <IoMdSearch className={styles.searchIcon}></IoMdSearch>
      <InputBox
        placeholder={SEARCHINPUT.placeholder}
        box={SEARCHINPUT.box}
      ></InputBox>
    </div>
  );
}

export default SearchBar;
