import React, { useRef, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./ShortTeaser.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
import { ADVERTISEMENT_IMAGE } from "../../constants/Home";

/**
 * A component that displays Short Teaser of movie and handel ad.
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data containing movie details.
 * @param {boolean} props.showAd - Flag indicating whether to show an advertisement.
 * @param {boolean} props.showAdNotification - Flag indicating whether to show an ad notification.
 * @param {number} props.advertisementCounter - Countdown timer for the advertisement.
 * @param {number} props.resumeCounter - Countdown timer for resuming the video.
 * @param {Function} props.onClickHandler - Click event handler for the component.
 * @param {Function} props.onLikeIncrease - Event handler for increasing likes.
 * @param {boolean} props.showResumeNotification - Flag indicating whether to show a resume notification.
 * @returns {JSX.Element} ShortTeaser component.
 */

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

ShortTeaser.propTypes = {
  data: PropTypes.shape({
  id:PropTypes.string.isRequired,
  movie: PropTypes.string.isRequired,
  like: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}).isRequired,
showAd: PropTypes.bool.isRequired,
showAdNotification: PropTypes.bool.isRequired,
advertisementCounter: PropTypes.number.isRequired,
resumeCounter: PropTypes.number.isRequired,
onClickHandler: PropTypes.func.isRequired,
onLikeIncrease: PropTypes.func.isRequired,
showResumeNotification: PropTypes.bool.isRequired};

export default withAdvertisement(ShortTeaser,5,2,false);
