import { Component } from "react";

/**
 * A higher-order component (HOC) that adds advertisement functionality to a wrapped component.
 * @param {React.Component} WrappedComponent - The component to be wrapped.
 * @param {number} adv - Advertisement timer in seconds.
 * @param {number} resume - Resume timer in seconds.
 * @param {boolean} startAgain - Flag indicating if the advertisement should start again on click.
 * @returns {React.Component} HOC-enhanced component.
 */

const withAdvertisement = (WrappedComponent) => {
  class WithAdvertisement extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isshowAd: false,
        isshowAdNotification: false,
        adNotificationRemainingTime: 0,
        adRemainingTime: 0,
      };
    }

    setAdTimer=(time)=>
    {
     this.setState({
       adRemainingTime:time
     })

    }
 
    //method to show ad notification message 
    //1.set show ad notification to true
    //2.set ad to false
    //3.change the time of adNotification remaining time
    showAdNotification = (time, totaltime) => {
      this.setState({
        adNotificationRemainingTime: totaltime - time,
        isshowAdNotification: true,
        isshowAd:false
      });
    };
 //method to show ad 
    //1.set show ad notification to false
    //2.set ad to true
    //3.change the time of ad remaining time
    showAd = (remainingTime) => {
      this.setState({
        isshowAd: true,
        isshowAdNotification: false,
        adRemainingTime:remainingTime-1,
      });
     
    };
 //method to stop Ad
    //1.set show ad notification to false
    //2.set ad to false
    stopAd=()=>{
      this.setState({
        isshowAd:false,
        isshowAdNotification:false
      })
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          isshowAd={this.state.isshowAd}
          setAdTimer={this.setAdTimer}
          stopAd={this.stopAd}
          adNotificationRemainingTime={this.state.adNotificationRemainingTime}
          isshowAdNotification={this.state.isshowAdNotification}
          adRemainingTime={this.state.adRemainingTime}
          showAdNotification={this.showAdNotification}
          showAd={this.showAd}
        />
      );
    }
  }
  return WithAdvertisement;
};

export default withAdvertisement;
