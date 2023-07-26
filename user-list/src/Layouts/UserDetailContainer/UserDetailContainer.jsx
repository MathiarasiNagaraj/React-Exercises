import React from "react";
import UserDetailCard from "../../Components/UserDetailCard/UserDetailCard";
import data from "../../Services/data.json";
import styles from "./UserDetailContainer.module.css";

function UserDetailContainer() {
  const userContainer = data.map((user) => (
    <UserDetailCard users={user} key={user.name}></UserDetailCard>
  ));
  return (
    <div className={styles.userContainer}>
      {userContainer}
    </div>
  );
}

export default UserDetailContainer;
