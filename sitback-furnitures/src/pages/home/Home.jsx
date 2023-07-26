import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.scss";
import Footer from "../../components/footer/Footer";
import HomeContainer from "../../containers/home/HomeContainer";
import { HOME } from "../../constants/components";

/**
 * A component for rendering the home page.
 * @param {Object} props - The props for the Home component.
 * @param {string} props.class - The additional CSS class name for styling purposes.
 * @returns {JSX.Element} - The home page component with the main content and footer.
 */
const Home = (props) => {
  return (
    <>
      <div className={`${styles.homeContainer} ${props.class}`}>
        <h1>{ HOME.title}</h1>
        <h2>{ HOME.description}</h2>
        <HomeContainer />
      </div>
      <Footer />
    </>
  );
};

Home.propTypes = {
  class: PropTypes.string,
};

export default Home;
