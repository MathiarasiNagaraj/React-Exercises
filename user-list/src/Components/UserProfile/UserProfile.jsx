import React from "react";
import styles from "./UserProfile.module.css";

function UserProfile(props) {
  return (
    <div className={styles.imgContainer}>
      <img src={props.imgUrl} className={styles.profileImg} alt={`${props.name}-profile`}></img>
    </div>
  );
}

export default UserProfile;
