import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryCard.module.scss';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

/**
 * A reusable component to display a category card.
 * @param {Object} props - The props for the CategoryCard component.
 * @param {Object} props.item - The data object representing the category card.
 * @param {string} props.item.photo - The URL of the category image.
 * @param {string} props.item.category - The category name.
 * @param {string} props.item.description - The category description.
 * @returns {JSX.Element} - The category card element.
 */

const CategoryCard = props => {
 const {item}=props
  return (
    <div className={styles.categoryCard}>
      <img
        className={styles.categoryImage}
        src={item.photo}
        alt={item.category}
      />
      <h1>{item.category}</h1>
      <p>{item.description}</p>
      <Link to={`/categories?id=${item.category}`}>
        <Button name="Shop Now" />
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
