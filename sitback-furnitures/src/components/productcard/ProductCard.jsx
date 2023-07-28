import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.scss";
import Button from "../button/Button";
import { IoShieldCheckmark } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { formattedAmount } from "../../utils/util";

/**
 * A reusable component for displaying a product card.
 * @param {Object} prop - The props for the ProductCard component.
 * @param {Object} prop.props - The data object representing the product details.
 * @param {string} prop.props.name - The name of the product.
 * @param {string} prop.props.photo - The URL of the product photo.
 * @param {string} prop.props.description - The description of the product.
 * @param {number} prop.props.quantity - The quantity of the product.
 * @param {number} prop.props.price - The price of the product.
 * @param {string} prop.props.id - The unique identifier of the product.
 * @param {number} prop.props.guarantee - The guarantee period of the product in years.
 * @param {function} prop.onClick - The function called when the "Add to Cart" button is clicked.
 * @param {function} prop.onActiveChange - The function called to change the active view (e.g., "cart" or "wishlist").
 * @param {function} prop.onWishListClick - The function called when the "Add to Wishlist" button is clicked.
 * @returns {JSX.Element} - The product card displaying product details.
 */
const ProductCard = ({ props, onClick }) => {
  const { name, photo, description, price, id, guarantee, quantity } = props;


  //on clicking add to wishList ,data should pass to MywishList through parent components and change the active state to wishList
  const onClickHandler = (e) => {
    console.log(e.target.value);
    const data = {
      name: e.target.value,
      product: {
        id: id,
        name: name,
        price: price,
        description: description,
        photo: photo,
        quantity: 1,
      },
    };
    onClick(data);
  };

  const placeholderImage =
    "/assets/images/defaultImage.png"

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };
  return (
    <div className={styles.productCard}>
      <img
        alt={name}
        src={photo ? photo : placeholderImage}
        onError={onImageError}
      />

      <h3 className={styles.productName}>
        {name}
        <span>
          <BiRupee />
          {formattedAmount(price)}
        </span>
      </h3>
      {!guarantee ? (
        <p className={styles.productQuantity}>Quantity : {quantity}</p>
      ) : (
        ""
      )}
      <p className={styles.productDescription}>{description}</p>
      {guarantee ? (
        <>
          <p className={styles.productGuarentee}>
            <span>
              <IoShieldCheckmark></IoShieldCheckmark>
            </span>
            {guarantee} {guarantee > 1 ? "YEARS" : "YEAR"} GUARANTEE
          </p>
          <div className={styles.buttons}>
            <Button
              name={"ADD TO WISHLIST"}
              styleClass="wishList"
              value="wishlist"
              onClick={onClickHandler}
            />
            <Button
              name={"ADD TO CART"}
              styleClass="addCart"
              value="cart"
              onClick={onClickHandler}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

ProductCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    guarantee: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default ProductCard;
