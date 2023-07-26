import React from "react";
import PropTypes from "prop-types";
import styles from "./Products.module.scss";
import ProductCard from "../../components/productcard/ProductCard";

/**
 * A component for displaying a list of products.
 * @param {Object} props - The props for the Products component.
 * @param {Array} props.props - The list of product data to be displayed.
 * @param {function} props.onChange - The function called when a product is clicked.
 * @param {function} props.onActiveChange - The function called when the active state changes.
 * @param {function} props.onWishListClick - The function called when a product is added to the wishlist.
 * @returns {JSX.Element} - The container displaying the list of products.
 */
const Products = (props) => {
  const { props: productList, onClick } = props;


  const onClickHandler = (data) => {
    onClick(data);
  };

  const products =
   productList &&
  productList?.map((product) => (
      <ProductCard props={product} key={product.id} onClick={onClickHandler} />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>{products}</div>
    </div>
  );
};

Products.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      price: PropTypes.number.isRequired,
      guarantee: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Products;
