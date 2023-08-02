import React, { useEffect, useState } from "react";

/**
 * A higher-order component (HOC) that adds advertisement functionality to a wrapped component.
 * @param {React.Component} WrappedComponent - The component to be wrapped.
 * @param {number} adv - Advertisement timer in seconds.
 * @param {number} resume - Resume timer in seconds.
 * @param {boolean} startAgain - Flag indicating if the advertisement should start again on click.
 * @returns {React.Component} HOC-enhanced component.
 */

const withAdvertisement = (WrappedComponent, adv, resume, startAgain) => {
  const WithAdvertisement = (props) => {
    const [started, setStarted] = useState(false);
    const [showAdNotification, setshowAdNotification] = useState(false);
    const [showAd, setShowAd] = useState(false);
    const [advertisementCounter, setAdvertisementCounter] = useState(adv);
    const [showResumeNotification, setshowResumeNotification] = useState(false);
    const [resumeCounter, setResumeCounter] = useState(resume);

    // Initialize counters when component mounts or 'adv' and 'resume' change
    useEffect(() => {
      setAdvertisementCounter(adv);
      setResumeCounter(resume);
    }, [WrappedComponent, adv, resume]);

    /**
     * Handles the click event for starting advertisement and resume Notification
     */
    const onClickHandler = () => {
      if (!started) {
        setshowAdNotification(true);
        setTimeout(() => {
          setShowAd(true);
          setshowAdNotification(false);
          setshowResumeNotification(true);
          setTimeout(() => {
            setShowAd(false);
            setshowResumeNotification(false);
          }, resumeCounter * 1000);
        }, advertisementCounter * 1000);
        if (!startAgain) {
          setStarted(true);
        }
      }
    };
    useEffect(() => {
      let advertisementTimer, resumeTimer;
      if (showAdNotification) {
        advertisementTimer = setInterval(() => {
          setAdvertisementCounter((prev) => prev - 1);
        }, 1000);
      }

      if (showResumeNotification) {
        resumeTimer = setInterval(() => {
          setResumeCounter((prev) => prev - 1);
        }, 1000);
      }
      // Reset counters when showAdNotification or showResumeNotification changes
      setAdvertisementCounter(adv);
      setResumeCounter(resume);
      //clean up function that clear interavel
      return () => {
        clearInterval(advertisementTimer);
        clearInterval(resumeTimer);
      };
    }, [showResumeNotification, showAdNotification]);

    return (
      <WrappedComponent
        {...props}
        showAdNotification={showAdNotification}
        showAd={showAd}
        advertisementCounter={advertisementCounter}
        resumeCounter={resumeCounter}
        showResumeNotification={showResumeNotification}
        onClickHandler={onClickHandler}
      />
    );
  };
  return WithAdvertisement;
};

export default withAdvertisement;
