import React from "react";
import styles from "./Home.module.css"
import Header from "../../Layouts/Header/Header";
import UserDetailContainer from "../../Layouts/UserDetailContainer/UserDetailContainer";

function Home() {
  return (
    <>
    <h1 className={styles.heading}>Users</h1>
      <Header></Header>
      <UserDetailContainer></UserDetailContainer>
    </>
  );
}

export default Home;
