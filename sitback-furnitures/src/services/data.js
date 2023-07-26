import axios from "axios";
export const getCategory = async () => {
  return await axios
    .get(`https://jsonmockserver.vercel.app/api/shopping/furniture/categories`)
    .then((data) => data.data)
    .catch((error) => error);
};

export const getProductsByCategory = async (category) => {
  return await axios
    .get(
      `https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${category}`
    )
    .then((data) => data.data)
    .catch((error) => error);
};


