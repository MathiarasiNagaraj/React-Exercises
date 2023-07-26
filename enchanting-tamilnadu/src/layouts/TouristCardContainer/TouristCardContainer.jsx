import React from 'react'
import { useLocation } from 'react-router'
import TouristCard from '../../components/TouristCard/TouristCard'
import { SIMILAR_DESTINATION } from '../../constants/component'
import styles from './TouristCardContainer.module.scss'
import PropTypes from 'prop-types';

/**
 * 
 * @param {object} props object contains city title and description
 *  @param {object} data array of object of city detail
 * @returns 
 */
const TouristCardContainer = ({props,data}) => {
  const touristCard = data && data.map(item => (<TouristCard props={item} key={item.city}></TouristCard>))
  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  return (
      <div className={styles.container}>
      <h2 className={styles.containerTitle}>{ props.title}</h2>
      <p className={styles.containerDescription}>{props.description}{props == SIMILAR_DESTINATION && name}</p>
          <div className={styles.cardContainer}>
          {touristCard}
          </div>
    
    </div>
  )
}
TouristCardContainer.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TouristCardContainer