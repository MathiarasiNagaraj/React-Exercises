import React, { useEffect, useState } from "react";
import { BannerContainer } from "../../layouts/BannerContainer/BannerContainer";
import TouristCardContainer from "../../layouts/TouristCardContainer/TouristCardContainer";
import { SIMILAR_DESTINATION } from "../../constants/component";
import { useLocation, useNavigate } from "react-router";
import { getPlace, getSimilarPlace, getWeather } from "../../services/data";
import styles from "./DetailPage.module.scss";
import DetailBanner from "../../components/DetailBanner/DetailBanner";

/**
 *
 * @returns Detail page component
 */
const DetailPage = () => {
  const [cityDetail, setCityDetail] = useState({});
  const [similarCity, setSimilarCity] = useState([]);
  const [temperature, setTemperature] = useState("");
  const [allCity, setAllCity] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const detail = await getSimilarPlace(name.toLowerCase());
      setCityDetail(detail);
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    const fetchData = async () => {
      const allCities = await getPlace();
      setAllCity(allCities);

      const filteredCities = allCity?.filter((item) =>
        cityDetail.relatedPlaces?.includes(item.city)
      );
      setSimilarCity(filteredCities);
    };

    fetchData();
  }, [name, cityDetail, allCity]);

  useEffect(() => {
    const cities = [];
    allCity?.map((item) => cities.push(item.city));

    if (cities.length > 0 && !cities.includes(name)) {
      navigate("/");
    }
  }, [name, allCity, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      const weather = await getWeather(name);
      setTemperature(weather.current ? weather.current.temp_c:"not available");
    };

    fetchData();
  }, [name]);

  const formattedMessage = cityDetail.fullDescription?.split("\\n").map(para => <p>{ para}</p>)

   
  console.log(formattedMessage);

  return (
    <div>
      <BannerContainer poster={`${cityDetail.city}.png`}>
        <DetailBanner data={cityDetail} temperature={temperature} />
      </BannerContainer>
      <div className={styles.description}>{formattedMessage}</div>
      <TouristCardContainer props={SIMILAR_DESTINATION} data={similarCity} />
    </div>
  );
};

export default DetailPage;
