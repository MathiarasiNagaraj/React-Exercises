import React, { useRef } from "react";
import styles from "./NowShowing.module.scss";
import { NOW_SHOWING } from "../../constants/NowShowing";

/**
 * A component that displays a Now showing page
 * @returns {JSX.Element} NowShowing component.
 */

const NowShowing = () => {
  const videoRef = useRef();
  const onClickHandler = () => {
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };

  return (
    <div className={styles["now-showing"]}>
      <h4>{NOW_SHOWING.pageTitle}</h4>
      <h1>{NOW_SHOWING.title}</h1>
      <video
        src={NOW_SHOWING.url}
        ref={videoRef}
        controls="true"
        onClickHandler={onClickHandler}
       
      />
      <p>{NOW_SHOWING.description}</p>
    </div>
  );
};

export default NowShowing;
