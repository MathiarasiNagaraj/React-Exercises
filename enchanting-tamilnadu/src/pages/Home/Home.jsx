import React, { useState, useEffect } from 'react'
import { BannerContainer } from '../../layouts/BannerContainer/BannerContainer'
import TouristCardContainer from '../../layouts/TouristCardContainer/TouristCardContainer'
import { HOME_BANNER, DESTINATION } from '../../constants/component'
import { getPlace } from '../../services/data'
import HomeBanner from '../../components/HomeBanner/HomeBanner'

/**
 * 
 * @returns Home component
 */
const Home = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cities = await getPlace();
      setCity(cities);
    };

    fetchData();
  }, [city]);

  return (
    <div>
      <BannerContainer poster="poster.webp">
        <HomeBanner props={HOME_BANNER} />
      </BannerContainer>
      <TouristCardContainer props={DESTINATION} data={city} />
    </div>
  );
}


export default Home;
