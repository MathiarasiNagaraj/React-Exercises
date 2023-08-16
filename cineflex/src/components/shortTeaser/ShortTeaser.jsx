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
    setAdTimer,
    showAd,
    stopAd,
  } = props;

  const videoRef = useRef();
  const playRef = useRef();
  const [isStarted, setIsStarted] = useState(false);
  //on clicking toggle play and pause
  const onClickHandler = () => {
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };
  //on play hide the play icon
  const onPlayHandler = () => {
    if (videoRef.current?.currentTime === 0) {
      setIsStarted(true);
    }
    playRef.current.style.display = "none";
  };
  //on pause show the play icon
  const onPauseHandler = () => {
    if (!isshowAd) {
      playRef.current.style.display = "block";
    }
    videoRef.current.pause();
  };

  useEffect(() => {
    if (isStarted) {
      setAdTimer(ADVERTISEMENT.totalTime + 1);
    }
  }, [isStarted]);
  //when adNotification time or adtime changes
  useEffect(() => {
    if (isStarted) {
      let Adinterval, resumeinterval;

      //if the (current)adNotfication  is less than total AD-notification length increase the current time by 1 for every second
      if (
        Math.floor(videoRef.current?.currentTime) <
        ADVERTISEMENT_NOTIFICATION.totalTime - 1
      ) {
        //only on start of video start the counter (call the hoc method)
  
        Adinterval = setInterval(() => {
          showAdNotification(
            Math.floor(videoRef.current?.currentTime),
            ADVERTISEMENT_NOTIFICATION.totalTime
          );
        }, 1000);
      
      }
      //if the ad-notification is equal to total AD-notification length then show the ad for total ad length
      //increase the adtime by 1 for every second until current adremaining time is less than total ad duration
      //hide the video
      else if (adRemainingTime >= 1) {
        resumeinterval = setInterval(() => {
          showAd(adRemainingTime);

          //setAdTime((prev) => prev + 1);
        }, 1000);
        videoRef.current.style.display = "none";
      }
      //if ad duration completed then stop the ad,show the video and play it
      else {
        stopAd();
        videoRef.current.style.display = "block";
        videoRef?.current?.play();
      }
      //on returning clear the interval
      return () => {
        clearInterval(Adinterval);
        clearInterval(resumeinterval);
      };
    }
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
            poster={`/assets/${data.title.trim().toLowerCase()}.jpeg`}
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
    title: PropTypes.string.isRequired,
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
