import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MovieDescription.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
import {
  ADVERTISEMENT_IMAGE,
  ADVERTISEMENT,
  ADVERTISEMENT_NOTIFICATION,
} from "../../constants/AllMovie";
import { AiFillLike } from "react-icons/ai";
import { MinuteTimeFormat } from "../../utils/util";

/**
 * A component that displays movie details and handles ad notifications.
 * @param {Object} props - Component props.
 * @param {Object} props.data - Data containing movie details.
 * @param {boolean} props.showAd - Flag indicating whether to show an advertisement.
 * @param {boolean} props.showAdNotification - Flag indicating whether to show an ad notification.
 * @param {number} props.advertisementCounter - Countdown timer for the advertisement.
 * @param {number} props.resumeCounter - Countdown timer for resuming the video.
 * @param {Function} props.onClickHandler - Click event handler for the component.
 * @param {Function} props.onLikeIncrease - Event handler for increasing likes.
 * @param {boolean} props.showResumeNotification - Flag indicating whether to show a resume notification.
 * @returns {JSX.Element} MovieDescription component.
 */

const MovieDescription = (props) => {
  const {
    data,
    isshowAd,
    isshowAdNotification,
    adNotificationRemainingTime,
    adRemainingTime,
    showAdNotification,
    showAd,
    stopAd,
    onLikeIncrease,
  } = props;
  
  const [advNotifTime, setadvNotifTime] = useState(0);
  const [adTime, setAdTime] = useState(0);
  const [Adinteravel, setAdinteravel] = useState();
  const [resumeinteravel, setresumeInteravel] = useState();
  useEffect(() => {
    clearInterval(Adinteravel);
    clearInterval(resumeinteravel);
    setadvNotifTime(1);
    showAdNotification(0, ADVERTISEMENT_NOTIFICATION.totalTime);  
  },[props.data.id])
 
  useEffect(() => {
 
    let Adinteravel, resumeInteravel;
    //to set adnotification message
    if (advNotifTime < ADVERTISEMENT_NOTIFICATION.totalTime) {
  
      Adinteravel = setInterval(() => {
     
        showAdNotification(advNotifTime, ADVERTISEMENT_NOTIFICATION.totalTime);
 
        setadvNotifTime((prev) => prev + 1);
      }, 1000);
      setAdinteravel(Adinteravel);
    }
    else if (adTime <= ADVERTISEMENT.totalTime) {
      resumeInteravel = setInterval(() => {
        showAd(adTime, ADVERTISEMENT.totalTime);
        setAdTime((prev) => prev + 1);
      }, 1000);
      setresumeInteravel(resumeInteravel);
    }
    else {
      stopAd();
    }
    
    return () => {
      clearInterval(Adinteravel);
      clearInterval(resumeInteravel)
    };
  }, [adNotificationRemainingTime, adRemainingTime, advNotifTime,props.data["id"]]);


  return (
    <div className={styles["movie-description"]}>
      {!isshowAd && (
        <>
          <div className={styles["movie-name"]}>
            <h1>{data?.movie}</h1>
            <div
              className={styles["like"]}
              onClick={() => {
                const likeData = {
                  id: data.id,
                  like: data.likes + 1,
                };
                onLikeIncrease(likeData);
              }}
            >
              <AiFillLike />
            </div>
          </div>
          <h4>{data?.likes} Likes</h4>
          <img src={data?.link} />
          <p className={styles["movie-about"]}>{data?.description}</p>

          <h2>ACTORS</h2>
          {data?.actors?.map((item) => (
          
            <p key={item}>{item}</p>
          ))}
        </>
      )}

      {isshowAd && (
        <img src={ADVERTISEMENT_IMAGE.url} className={styles["ad-img"]} />
      )}
      <div className={styles["notification"]}>
        {isshowAdNotification && (
          <p>
            {ADVERTISEMENT_NOTIFICATION.message}{" "}
            {MinuteTimeFormat(adNotificationRemainingTime)}{" "}
          </p>
        )}
        {isshowAd && !isshowAdNotification && (
          <p>
            {ADVERTISEMENT.message} {MinuteTimeFormat(adRemainingTime)}{" "}
          </p>
        )}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  isshowAd: PropTypes.bool.isRequired,
  isshowAdNotification: PropTypes.bool.isRequired,
  adNotificationRemainingTime: PropTypes.number.isRequired,
  adRemainingTime: PropTypes.number.isRequired,
  showAdNotification: PropTypes.func.isRequired,
  showAd: PropTypes.func.isRequired,
  onLikeIncrease: PropTypes.func.isRequired,
 
};

export default withAdvertisement(MovieDescription);
