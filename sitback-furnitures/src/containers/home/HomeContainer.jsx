import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { getCategory } from "../../services/data";
import CategoryCard from "../../components/categorycard/CategoryCard";
import { InfinitySpin } from "react-loader-spinner";
/**
 * A container component for displaying the home page with categories.
 * @returns {JSX.Element} - The home page with category cards.
 */
const HomeContainer = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const categoryData = await getCategory();
      setCategory(categoryData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const categories =category&& category?.map((item) => (
    <CategoryCard item={item} key={item.category} />
  ));

  return <>
    {loading ? <div className={styles.loader}><InfinitySpin ariaLabel="watch-loading" color="#111" visible={true} /></div> :
      <div className={styles.categoryContainer}>{categories}</div>}
    

  </> 
};

export default HomeContainer;
