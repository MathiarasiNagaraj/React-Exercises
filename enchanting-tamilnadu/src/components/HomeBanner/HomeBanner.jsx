import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./HomeBanner.module.scss";
import { BUTTON } from "../../constants/component";
import Button from "../Button/Button";
import DropDownBox from "../DropDownBox/DropDownBox";
import { getPlace } from "../../services/data";
import { Link } from "react-router-dom";
/**
 *
 * @param {object} props containing titla and caption
 * @returns
 */
const HomeBanner = ({ props }) => {
  const [city, setcity] = useState([]);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    (async () => {
      const allCity = await getPlace();

      setcity(allCity);
    })();
  }, []);
  const cities = [];
  city.map((item) => cities.push(item.city));

  const onChangeHandler = (data) => {
    setCityName(data.value);
  };
  const fulldescription = props.caption.split(" ");
  const lastword = fulldescription[fulldescription.length - 1];
  const description = fulldescription.slice(0, -1).join(" ");

  return (
    <>
      <div className={styles.posterContent}>
        <h4>{props.title}</h4>
        <h2>
          {description} <span>{lastword}</span>
        </h2>

        <DropDownBox
          styleClass="home"
          data={cities}
          onChange={onChangeHandler}
        ></DropDownBox>

        <Link to={`/details?name=${cityName}`}>
          <Button
            className={styles.posterButton}
            button={BUTTON.explore}
          ></Button>
        </Link>
      </div>
    </>
  );
};
HomeBanner.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomeBanner;
