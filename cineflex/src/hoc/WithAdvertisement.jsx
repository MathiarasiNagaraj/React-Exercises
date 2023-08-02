import React, { useEffect, useState } from "react";

const withAdvertisement = (WrappedComponent,adv,resume,startAgain) => {

  const WithAdvertisement=(props)=>{

    const[started,setStarted]=useState(false)
    const [showAdNotification, setshowAdNotification] = useState(false);
    const [showAd, setShowAd] = useState(false);
    const [advertisementCounter, setAdvertisementCounter] = useState(adv);
    const[showResumeNotification,setshowResumeNotification]=useState(false)
    const [resumeCounter, setResumeCounter] = useState(resume);
   
    useEffect(() => {
      setAdvertisementCounter(adv)
      setResumeCounter(resume)
   },[WrappedComponent,adv,resume])
    const onClickHandler = () => {
   
      if (!started) {
        setshowAdNotification(true);
        setTimeout(() => {
          setShowAd(true)
          setshowAdNotification(false)
          setshowResumeNotification(true)
          setTimeout(() => {
            setShowAd(false)
            setshowResumeNotification(false)
          }, resumeCounter * 1000)
        }, advertisementCounter * 1000)
        if (!startAgain) {
          setStarted(true)
        }
      }
    }
    useEffect(() => {
     
      let advertisementTimer, resumeTimer;
      if (showAdNotification) {
        advertisementTimer = setInterval(() => {
          setAdvertisementCounter((prev) => prev - 1)
        }, 1000)
      }
      
      if (showResumeNotification) {
        resumeTimer = setInterval(() => {
          setResumeCounter((prev) => prev - 1)
        }, 1000)
      }
      setAdvertisementCounter(adv)
      setResumeCounter(resume)
      return () => {
        clearInterval(advertisementTimer)
        clearInterval(resumeTimer)
      }
    
    }
    ,[showResumeNotification,showAdNotification])

    return (
        <WrappedComponent {...props}  showAdNotification={showAdNotification} showAd={showAd} advertisementCounter={advertisementCounter} resumeCounter={resumeCounter} showResumeNotification={showResumeNotification} onClickHandler={onClickHandler} />
      );
 
  };
  return WithAdvertisement;
};

export default withAdvertisement;
