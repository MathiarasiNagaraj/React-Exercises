import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MovieDescription.module.scss";
import withAdvertisement from "../../hoc/WithAdvertisement";
import { ADVERTISEMENT_IMAGE } from "../../constants/AllMovie";
import { AiFillLike } from "react-icons/ai";

const MovieDescription = (props) => {
  const {
    data,
    showAd,
    showAdNotification,
    advertisementCounter,
    resumeCounter,
    onClickHandler,
    onLikeIncrease,
    showResumeNotification
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
        {showResumeNotification && <p>Resume in {resumeCounter} secs</p>}
      </div>
    </div>
  );
};

MovieDescription.propTypes = {};

export default withAdvertisement(MovieDescription,6,2,true);
