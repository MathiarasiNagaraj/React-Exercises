import React from "react";
import styles from "./UserInterest.module.css";

function UserInterest({ interest }) {
  const interestList = interest.map((item) => (
    <span className={styles.tag} key={item}>
      {item}
    </span>
  ));
  return <div className={styles.tagContainer}>{interestList}</div>;
}

export default UserInterest;
