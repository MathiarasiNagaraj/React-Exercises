import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MovieDescription.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
import { ADVERTISEMENT_IMAGE } from "../../constants/AllMovie";
import { AiFillLike } from "react-icons/ai";



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
    showAd,
    showAdNotification,
    advertisementCounter,
    resumeCounter,
    onClickHandler,
    onLikeIncrease,
  } = props;
    useEffect(() => {
        onClickHandler()
    },[data])
  return (
    <div className={styles["movie-description"]}>
      {!showAd && (
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
            <p>{item}</p>
          ))}
        </>
      )}

      {showAd && (
        <img src={ADVERTISEMENT_IMAGE.url} className={styles["ad-img"]} />
      )}
      <div className={styles["notification"]}>
        {showAdNotification && (
          <p>Advertisement in {advertisementCounter} secs</p>
        )}
        {showAd&& !showAdNotification && <p>Resume in {resumeCounter} secs</p>}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
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
  showResumeNotification: PropTypes.bool.isRequired
};

export default withAdvertisement(MovieDescription,15,5,true);
