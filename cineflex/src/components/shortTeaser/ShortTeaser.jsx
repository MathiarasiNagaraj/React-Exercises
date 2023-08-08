import React, { useRef, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./ShortTeaser.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
import {
  ADVERTISEMENT,
  ADVERTISEMENT_IMAGE,
  ADVERTISEMENT_NOTIFICATION,
} from "../../constants/Home";
import { MinuteTimeFormat } from "../../utils/util";

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

const ShortTeaser = (props) => {
  const {
    data,
    isshowAd,
    isshowAdNotification,
    adNotificationRemainingTime,
    adRemainingTime,
    showAdNotification,
    showAd,
    stopAd,
  } = props;

  const videoRef = useRef();
  const playRef = useRef();
  const [isStarted, setIsStarted] = useState(false);

  const onClickHandler = () => {
    playRef.current.style.display = "none";
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };
  const onPlayHandler = () => {
    if (videoRef.current?.currentTime === 0) {
      setIsStarted(true);
    }
    playRef.current.style.display = "none";
  };
  const onPauseHandler = () => {
  
    playRef.current.style.display = "block";
    videoRef.current.pause();
   
  };

  const [adTime, setAdTime] = useState(0);
  useEffect(() => {
    let Adinteravel, resumeInteravel;
    if (
      Math.floor(Math.floor(videoRef.current?.currentTime)) <
      ADVERTISEMENT_NOTIFICATION.totalTime - 1
    ) {
      if (isStarted) {
        Adinteravel = setInterval(() => {
          showAdNotification(
            Math.floor(Math.floor(videoRef.current?.currentTime)),
            ADVERTISEMENT_NOTIFICATION.totalTime
          );
        }, 1000);
      }
    } else if (adTime <= ADVERTISEMENT.totalTime) {
      resumeInteravel = setInterval(() => {
        showAd(adTime, ADVERTISEMENT.totalTime);
        setAdTime((prev) => prev + 1);
      }, 1000);
      videoRef.current.style.display = "none";
    } else {
      stopAd();
      videoRef.current.style.display = "block";
      videoRef?.current?.play();
    }
    return () => {
      clearInterval(Adinteravel);
      clearInterval(resumeInteravel);
    };
  }, [adNotificationRemainingTime, adRemainingTime, isStarted]);

  return (
    <div className={styles["short-teaser-card"]}>
      <div className={styles["video"]}>
        <div className={styles["video-img"]} onClick={onClickHandler}>
          <div className={styles["play-icon"]}>
            <img src="/assets/play.png" alt="play-icon" ref={playRef} />
          </div>

          <video
            src={data.videoSrc}
            ref={videoRef}
            onPlay={onPlayHandler}
            onPause={onPauseHandler}
            poster={"/assets/sindel-background.png"}
          />
          {isshowAd && <img src={ADVERTISEMENT_IMAGE.url} />}
        </div>
      </div>

      <h1>{data.title}</h1>
      <div className={styles["notification"]}>
        {isshowAdNotification && (
          <p>
            {ADVERTISEMENT_NOTIFICATION.message}
            {MinuteTimeFormat(adNotificationRemainingTime)}
          </p>
        )}
        {isshowAd && (
          <p>
            {ADVERTISEMENT.message}
            {MinuteTimeFormat(adRemainingTime)}
          </p>
        )}
      </div>
    </div>
  );
};

ShortTeaser.propTypes = {
  data: PropTypes.shape({
    videoSrc: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
  }).isRequired,
  isshowAd: PropTypes.bool.isRequired,
  isshowAdNotification: PropTypes.bool.isRequired,
  adNotificationRemainingTime: PropTypes.number.isRequired,
  adRemainingTime: PropTypes.number.isRequired,
  showAdNotification: PropTypes.func.isRequired,
  showAd: PropTypes.func.isRequired,
  stopAd: PropTypes.func.isRequired,
};

export default withAdvertisement(ShortTeaser, 5, 2, false);
