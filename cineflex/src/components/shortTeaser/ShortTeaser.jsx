import React, { useRef, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./ShortTeaser.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
import { ADVERTISEMENT_IMAGE } from "../../constants/Home";
const ShortTeaser = props => {

  const { data ,showAd,showAdNotification,advertisementCounter,resumeCounter,onClickHandler} = props;

  const videoRef = useRef();

  return (
    <div className={styles["short-teaser-card"]}>
      <div className={styles["video"]}>
        {!showAd && (
          <video
            src={data.videoSrc}
            ref={videoRef}
            controls={true}
            webkit-playsInline={true}
            playsInline={true}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            onClick={onClickHandler}
          />
        )}
        {showAd && (
          <img src={ADVERTISEMENT_IMAGE.url} />
        )}
      </div>

      <h1>{data.title}</h1>
      <div className={styles["notification"]}>
        {showAdNotification && (
          <p>Advertisement in {advertisementCounter} secs</p>
        )}
        {showAd && (
          <p>Video will resume in {resumeCounter} secs</p>
        )}
      </div>
    </div>
  );
};

ShortTeaser.propTypes = {};

export default withAdvertisement(ShortTeaser,5,2,false);
