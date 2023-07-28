import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Cartcard.module.scss";
import { BiRupee } from "react-icons/bi";
import Button from "../button/Button";
import { formattedAmount } from "../../utils/util";

/**
 * A cart card component for displaying product details in a shopping cart.
 * @param {Object} props - The props for the Cartcard component.
 * @param {Object} props.props - The product details to display in the cart card.
 * @param {number} props.props.id - The unique identifier of the product.
 * @param {string} props.props.name - The name of the product.
 * @param {string} props.props.photo - The URL of the product photo.
 * @param {number} props.props.price - The price of the product.
 * @param {number} props.props.quantity - The quantity of the product in the cart.
 * @param {function} props.onChange - The function called when the product quantity is changed.
 * @returns {JSX.Element} - The cart card element displaying product details.
 */
const Cartcard = prop => {
  const { props, onChange,element,onClick } = prop
 
  const {name,photo,quantity,price,id}=props
  const [counter, setCounter] = useState(quantity);

//to change the quantity on UI whenever the +,- is clicked
  useEffect(() => {
    setCounter(quantity);
  }, [quantity]);
  //to decrease the quantity of the product
  const handleDecrement = () => {
    setCounter((prevCount) => prevCount - 1);

    const data = {
      value: counter - 1,
      id: id,
    };

    onChange(data);
  };
  //to increase the quantity of the product
  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);

    const data = {
      value: counter + 1,
      id: id,
    };

    onChange(data);
  };
  const onClickHandler = () => {
    onClick(props)
  }

  return (
    <div className={styles.cartCard}>
      <img className={styles.cartImage} src={photo} alt={name} />
      <div className={styles.cartDetails}>
        <h1 className={styles.cartName}>{name}</h1>
        <p className={styles.cartPrice}>
          <BiRupee />
          {formattedAmount(price)}
        </p>
      </div>

        {element==="wishList"
          ?
      <Button styleClass="wishListCard" name="ADD TO CART" onClick={onClickHandler}></Button>:
      <div className={styles.counter}>
            <Button styleClass="cart" name="-" onClick={handleDecrement}></Button>
           {counter}
           <Button styleClass="cart" name="+" onClick={handleIncrement}></Button>
          </div>
        }
      </div>

  );
};

Cartcard.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Cartcard;
