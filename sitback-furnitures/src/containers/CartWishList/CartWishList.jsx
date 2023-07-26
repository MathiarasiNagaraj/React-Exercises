import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CartWishList.module.scss";
import MyCart from "../myCart/MyCart";
import Button from "../../components/button/Button";

/**
 * A reusable component for displaying a container with tabs for "My Cart" and "My Wishlist".
 * @param {Object} props - The props for the CartWishList component.
 * @param {string} props.active - The active tab ("cart" or "wishList").
 * @param {function} props.onChange - The function called when the cart item quantity is changed.
 * @param {function} props.onClick - The function called when the cart item or wishlist item is clicked.
 * @param {Array} props.data - The cart item data.
 * @param {Array} props.wishListData - The wishlist item data.
 * @returns {JSX.Element} - The container with tabs and corresponding content.
 */
const CartWishList = (props) => {
  const { active, cartList, wishList } = props;
  const [cartListItems, setCartList] = useState([]);
  const [wishListItems, setWishList] = useState([]);
  const [activeState, setActive] = useState(active);
  useEffect(() => {
    setCartList(cartList);
    setWishList(wishList);
    setActive(active);
  }, [cartList, wishList, active]);

  useEffect(() => {
    setActive(active);
  }, [active]);

  const onClickHandler = (data) => {
    const isPresent = cartListItems.some((obj) => obj.id === data.id);
    const updatedData = isPresent
      ? cartListItems
      : [...cartListItems, { ...data, quantity: 1 }];
    localStorage.setItem("cartList", JSON.stringify(updatedData));
    setCartList(updatedData);
    localStorage.setItem("active", "cart");
    const updatedArray = wishListItems.filter((item) => item.id !== data.id);
    localStorage.setItem("wishList", JSON.stringify(updatedArray));
    setWishList(updatedArray);
    setActive("cart");
  };
  //to pass data to parent component ,on changing the quantity
  const onCountChangeHandler = (data) => {
  
    if (data.value >= 1) {
      const updatedArray = cartListItems.map((item) => {
        if (item.id === data.id) {
          return { ...item, quantity: data.value }; // Increment the quantity of the specific item
        }
        return item; // Keep the other items unchanged
      });

      localStorage.setItem("cartList", JSON.stringify(updatedArray));
      setCartList(updatedArray);
    } else {
      const updatedArray = cartListItems.filter((item) => item.id !== data.id);

      localStorage.setItem("cartList", JSON.stringify(updatedArray));
      setCartList(updatedArray);
    }
  };
  return (
    <div className={styles.wishListContainer}>
      <div className={styles.tab}>
        <Button
          name="MY CART"
          onClick={() => setActive("cart")}
          styleClass={
            activeState === "cart"
              ? "cartWishListActive"
              : "cartWishListInActive"
          }
        ></Button>
        <Button
          name="MY WISHLIST"
          onClick={() => setActive("wishList")}
          styleClass={
            activeState === "wishList"
              ? "cartWishListActive"
              : "cartWishListInActive"
          }
        ></Button>
      </div>
      <div className={styles.innerContainer}>
        <MyCart
          data={activeState === "wishList" ? wishListItems : cartListItems}
          onClick={onClickHandler}
          name={activeState}
          onCountChange={onCountChangeHandler}
        ></MyCart>
      </div>
    </div>
  );
};

CartWishList.propTypes = {
  active: PropTypes.string.isRequired,
  cartList: PropTypes.array.isRequired,
  wishList: PropTypes.array.isRequired,
};

export default CartWishList;
