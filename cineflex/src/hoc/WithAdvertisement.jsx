import React, { useEffect, useReducer } from "react";

const withAdvertisement = (WrappedComponent) => {

let adv = 0;
    let res = 0;
    let start=false
  const initialStates = {
    started: false,
    showAd: false,
    showAdvertisementNotification: false,
    showResumeNotification: false,
    advertisementCountdown: 0,
    resumeCountdown: 0,
    
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SetStarted":
            return { ...state, started: true };
        case "SetStarted_False":  
        return { ...state, started: false };
      case "SetShowAdv_False":
        return { ...state, showAd: false };
      case "SetShowAdv_True":
        return { ...state, showAd: true };
      case "SetShowAdv_Noti_True":
        return { ...state, showAdvertisementNotification: true };
      case "SetShowAdv_Noti_False":
        return { ...state, showAdvertisementNotification: false };
      case "SetShowRes_Noti_True":
        return { ...state, showResumeNotification: true };
      case "SetShowRes_Noti_False":
        return { ...state, showResumeNotification: false };
      case "dec_Adv_countDown":
        return {
          ...state,
          advertisementCountdown: state.advertisementCountdown - 1,
        };
      case "dec_Res_countDown":
        return { ...state, resumeCountdown: state.resumeCountdown - 1 };
    }
  };
  const WithAdvertisement = (props) => {
    const [state, dispatch] = useReducer(reducer, initialStates);
    useEffect(() => {
      let advertisementTimer;
      let resumeTimer;

      if (state.showAdvertisementNotification) {
        advertisementTimer = setInterval(() => {
          dispatch({ type: "dec_Adv_countDown" });
        }, 1000);
      }
      if (state.showResumeNotification) {
        resumeTimer = setInterval(() => {
          dispatch({ type: "dec_Res_countDown" });
        }, 1000);
      }
       
      state.advertisementCountdown = adv;
      state.resumeCountdown = res;

      return () => {
        clearInterval(advertisementTimer);
        clearInterval(resumeTimer);
      };
    }, [state.showAdvertisementNotification, state.showResumeNotification]);

      const onClickHandler = (time) => {

          if (!state.started) {
              state.advertisementCountdown = time.adv;
              state.resumeCountdown = time.res
              adv = time.adv
              res = time.res
              start=time.start
              console.log("clciked in witg")
        dispatch({ type: "SetStarted" });
        dispatch({ type: "SetShowAdv_Noti_True" });
        setTimeout(() => {
          dispatch({ type: "SetShowAdv_True" });
          dispatch({ type: "SetShowAdv_Noti_False" });
          dispatch({ type: "SetShowRes_Noti_True" });

          setTimeout(() => {
            dispatch({ type: "SetShowAdv_False" });
            dispatch({ type: "SetShowRes_Noti_False" });
          },res*1000);
        }, adv*1000);
              if (start)
              {
                dispatch({ type: "SetStarted_False" });  
               }
      }
    };

    return (
        <WrappedComponent {...props} {...state} onClickHandler={onClickHandler} />
      );
 
  };
  return WithAdvertisement;
};

export default withAdvertisement;
