import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MyCart.module.scss";
import Button from "../../components/button/Button";
import Cartcard from "../../components/cartcard/Cartcard";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { PLACEHOLDER } from "../../constants/components";
import { formattedAmount } from "../../utils/util";

/**
 * A component for displaying the cart page with added items.
 * @param {Object} props - The props for the MyCart component.
 * @param {Array} props.data - The cart item data.
 * @param {function} props.onChange - The function called when the cart item quantity is changed.
 * @returns {JSX.Element} - The cart page displaying the items added to the cart.
 */
const MyCart = (props) => {
  const { data, onClick, name,onCountChange } = props;
  const [cartData, setCartData] = useState(data);
  const [total, setTotal] = useState(0);
  //to change cart based on props
  useEffect(() => {
    setCartData(data);
  }, [data]);

  


  // Calculate the total amount
  useEffect(() => {
    const total = cartData?.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(total);
  }, [cartData]);
  const changeHandler = (data) => {

    onCountChange(data)
}
  const cartCards = cartData?.map((data) => (
    <Cartcard
      props={data}
      key={data.name}
      onChange={changeHandler}
      element={name}
      onClick={()=>onClick(data)}
    />
  ));

  const placeItemsHandler = () => {
    localStorage.setItem("active", "wishList");
  };

  return (
    <div className={styles.cart}>
{ name==="wishList" ?
     <>{data.length > 0 ? cartCards : <p className={styles.alterText}>{ PLACEHOLDER.wishlist}</p>}</> 
    :  <>
      {cartCards.length > 0 ? (
        <>
          <div className={styles.cartContainer}>{cartCards}</div>
          <div className={styles.total}>
            <div>
              TOTAL AMOUNT
              <p>
                <BiRupee />
                {formattedAmount(total)}
              </p>
            </div>
            <Link to="/order-confirm-page">
              <Button
                name="PLACE ORDER"
                onClick={placeItemsHandler}
                styleClass="placeItem"
              />
            </Link>
          </div>
        </>
      ) : (
        <p className={styles.alterText}>{PLACEHOLDER.cart}</p>
        )}
        </>}
    </div>
  );
};

MyCart.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  name:PropTypes.string.isRequired
};

export default MyCart;
