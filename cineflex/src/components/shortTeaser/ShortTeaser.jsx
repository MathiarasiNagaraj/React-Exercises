import React, { useRef, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./ShortTeaser.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
const ShortTeaser = props => {
  console.log(props)
  const { data ,showAd,showAdvertisementNotification,showResumeNotification,advertisementCountdown,    resumeCountdown,onClickHandler} = props;

  const videoRef = useRef();
  const time = {
    adv: 5,
    res: 2,
    start:false
 }
  return (
    <div className={styles["short-teaser-card"]}>
      <div className={styles["video"]}>
        {!showAd && (
          <video
            src={data.videoSrc}
            ref={videoRef}
            controls={true}
            webkit-playsinline={true}
            playsinline={true}
            disablePictureInPicture
            controlslist="nodownload noplaybackrate"
            onClick={()=>onClickHandler(time)}
          />
        )}
        {showAd && (
          <img src="/assets/advertisements/small-promos/Advertisement-Small-1.png" />
        )}
      </div>

      <h1>{data.title}</h1>
      <div className={styles["notification"]}>
        {showAdvertisementNotification && (
          <p>Advertisement in {advertisementCountdown} secs</p>
        )}
        {showResumeNotification && (
          <p>Video will resume in {resumeCountdown} secs</p>
        )}
      </div>
    </div>
  );
};

ShortTeaser.propTypes = {};

export default withAdvertisement(ShortTeaser);
