import React, { useEffect, useState ,useRef} from "react";

/**
 * A higher-order component (HOC) that adds advertisement functionality to a wrapped component.
 * @param {React.Component} WrappedComponent - The component to be wrapped.
 * @param {number} adv - Advertisement timer in seconds.
 * @param {number} resume - Resume timer in seconds.
 * @param {boolean} startAgain - Flag indicating if the advertisement should start again on click.
 * @returns {React.Component} HOC-enhanced component.
 */

const withAdvertisement = (WrappedComponent, advertisementCount, resumeCount, isStartAgain) => {
  const WithAdvertisement = (props) => {
    
    //states for Ad,Ad_Notification,Ad_Counter,resumeCounter
    const [showAd,setShowAd] = useState(false);
    const [showAdNotification,setShowAdNotification] = useState(false);
    const [advertisementCounter, setAdvertisementCounter] = useState(advertisementCount);
    const [resumeCounter, setResumeCounter] = useState(resumeCount);
    const [startAgain, setStartAgain] = useState(true);
    const advTimeOutRef = useRef(null);
    const resTimeOutRef = useRef(null);
    useEffect(() => {
      setAdvertisementCounter(advertisementCount);
      setResumeCounter(resumeCount);



      clearTimeout(advTimeOutRef.current);
      clearTimeout(resTimeOutRef.current);
   },[props.data])

    useEffect(() => {
      //setting interval for countdown for ad and notification 
      let advInteravel, resInterval;
      if (showAdNotification)
      advInteravel=  setInterval(() => {
          setAdvertisementCounter((prevCounter) => prevCounter - 1);
        }, 1000)
      if (showAd)
      resInterval= setInterval(() => {
          setResumeCounter((prevCounter) => prevCounter - 1);
        }, 1000)
      return () => {
        clearInterval(advInteravel);
        clearInterval(resInterval);
      }
      
    },[showAd,showAdNotification])

    //onclick function when poster or video clicked
    const onClickHandler = () => {
      //1. set the ad notification to true
      if (startAgain) {
        setShowAdNotification(true);
        //2.settime out for ad showing
        let adTimeOutId = setTimeout(() => {
          //3.after ad notification timer completes hide the ad notification and show the ad
          setShowAdNotification(false);
          setShowAd(true);
          //4. ad should display for {resumeCounter} seconds and after hide the ad
          let resTimeOut = setTimeout(() => {
            setShowAd(false);
          }, resumeCounter * 1000)
          resTimeOutRef.current = resTimeOut
        }, advertisementCounter * 1000)
      
        advTimeOutRef.current = adTimeOutId
      }

      if (!isStartAgain)
      {
        setStartAgain(false);
        }
    }
    return (
      <WrappedComponent
        {...props}
        showAdNotification={showAdNotification}
        showAd={showAd}
        advertisementCounter={advertisementCounter}
        resumeCounter={resumeCounter}
        onClickHandler={onClickHandler}
      />
    );
  };
  return WithAdvertisement;
};

export default withAdvertisement;
