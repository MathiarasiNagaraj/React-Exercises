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
    showAdNotification = (time, totaltime) => {
      this.setState({
        adNotificationRemainingTime: totaltime - time,
        isshowAdNotification: true,
        isshowAd:false
      });
    };

    showAd = (remainingTime, totalTime) => {
      this.setState({
        isshowAd: true,
        isshowAdNotification: false,
        adRemainingTime: totalTime - remainingTime,
      });
      
    };

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
