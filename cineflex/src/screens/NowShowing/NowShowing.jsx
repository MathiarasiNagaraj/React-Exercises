import React, { useRef } from "react";
import styles from "./NowShowing.module.scss";
import { NOW_SHOWING } from "../../constants/NowShowing";

/**
 * A component that displays a Now showing page
 * @returns {JSX.Element} NowShowing component.
 */

const NowShowing = () => {
  const videoRef = useRef();
  const playRef = useRef();

  //on play hide the play icon
  const onPlayHandler = () => {
    videoRef.current.play();
    playRef.current.style.display = "none";
  };
  //on pause show the play icon
  const onPauseHandler = () => {
    videoRef.current.pause();
    playRef.current.style.display = "block";

  };

  //on clicking toggle play and pause
  const onClickHandler = () => {
    playRef.current.style.display = "none";
    videoRef.current.paused
    ? videoRef.current.play()
    : videoRef.current.pause();
  };

  return (
    <div className={styles["now-showing"]}>
      <h4>{NOW_SHOWING.pageTitle}</h4>
      <h1>{NOW_SHOWING.title}</h1>
      <div className={styles["video-img"]}>
      <div className={styles["play-icon"]}>
            <img src="/assets/play.png" alt="play-icon" ref={playRef} />
          </div>
        <video
           onClick={onClickHandler}
        src={NOW_SHOWING.url}
        ref={videoRef}

          onPlay={onPlayHandler}
          onPause={onPauseHandler}
 poster="/assets/sindel-background.png"
        />
        </div>
      <p>{NOW_SHOWING.description}</p>
    </div>
  );
};

export default NowShowing;
