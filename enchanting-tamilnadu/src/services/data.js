import axios from "axios";

export const getPlace = async () => {
  return await axios
    .get("https://nijin-server.vercel.app/api/explorer ")
    .then((data) => data.data)
    .catch((error) => error);
};

export const getSimilarPlace = async (city) => {
  return await axios
    .get(`https://nijin-server.vercel.app/api/explorer/places/${city}`)
    .then((data) => data.data)
    .catch((error) => error);
};

export const getWeather = async (city) => {
  return await axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=5d18d19ccebb4f13abe133700231804&q=${city}&aqi=no`
    )
    .then((data) => data.data)
    .catch((error) => error);
};
