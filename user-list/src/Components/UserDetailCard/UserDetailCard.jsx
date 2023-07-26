import React from "react";
import UserInterest from "../UserInterest/UserInterest";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./UserDetailCard.module.css";

function UserDetailCard({ users }) {
  return (
    <div className={styles.userCard}>
      <UserProfile imgUrl={users.profile} name={users.name}></UserProfile>
      <div>
        <div className={styles.detailBox}>
          <p className={styles.userName}>{users.name}</p>
          <span>
            {users.city},{users.state}
          </span>
        </div>
        <UserInterest interest={users.interest}></UserInterest>
      </div>
    </div>
  );
}

export default UserDetailCard;
