import React, { useEffect, useState } from "react";
import styles from "./Category.module.scss";

import { getProductsByCategory } from "../../services/data";
import { useLocation,useNavigate } from "react-router-dom";
import CartWishList from "../../containers/CartWishList/CartWishList";
import { InfinitySpin } from "react-loader-spinner";
import { getCategory } from "../../services/data";
import Products from "../../containers/products/Products";

const Category = () => {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("id");
  const storedCartList = JSON.parse(localStorage.getItem("cartList")) || [];
  const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
  const [productList, setproductList] = useState([]);
  const [cartList, setCartList] = useState(storedCartList);
  const [wishList, setWishList] = useState(storedWishList);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("cart");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  //to navigate 404 page when incorrect url entered

  
  useEffect(()=>{
    const categories=["couches","chairs","dining"]
   category.length>0&& category.map(item => categories.push(item.id));
    if(categories.length>0&&!categories.includes(name.toLowerCase()))
    {
      navigate("/*");
    }
  },[name,category])

     // to get products for respective category
     useEffect(() => {
      const fetchData = async () => {
        const productList = await getProductsByCategory(name.toLowerCase());
        setproductList(productList);
        setLoading(false);
      };
      fetchData();
    }, [name]);
 

  //on page reloading initial time data should be fetched from local host for one time
  useEffect(() => {
    const storedCartList = JSON.parse(localStorage.getItem("cartList")) || [];
    setCartList(storedCartList);
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishList);
    if (storedCartList.length < 0) {
      localStorage.setItem("active", "wishList");
      setActive("wishList");
    }
    if (storedWishList.length < 0) {
      localStorage.setItem("active", "cart");
      setActive("cart");
    }
  }, []);
  //storeData function to store data (reusing the same function for both increment and decrement)
  const storeData = (product, productList) => {
    let isPresent = false;

    const updatedProductList = productList.map((item) => {
      if (item.id === product.id) {
        isPresent = true;
        return { ...item, quantity: item.quantity + 1 }; 
      }
      return item; 
    });
    //if item already present the quantity increase by 1 else added to array
    let updatedData;
    if (!isPresent) {
      updatedData = [...productList, product];
    } else {
      updatedData = updatedProductList;
    }
    return updatedData; 
  }
//on clicking add to cart /add to wishlist ,the item will be stored on respective list
  const onClickHandler = (data) => {
    const storedCartList = JSON.parse(localStorage.getItem("cartList")) || [];
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    if (data.name === "cart") {
     const updatedData= storeData(data.product,storedCartList)
      localStorage.setItem("cartList", JSON.stringify(updatedData));
      setActive("cart");
      setCartList(updatedData);
    }
    else {
      const updatedData= storeData(data.product, storedWishList)
      localStorage.setItem("wishList", JSON.stringify(updatedData));
      setActive("wishList");
      setWishList(updatedData);
    }
    
  };

  //coverting string to int for price
  const updatedProductList =
    productList &&
    productList?.map((product) => ({
      ...product,
      id: parseInt(product.id, 10),
      price: parseInt(product.price, 10), // Convert price from string to int using parseInt
    }));
  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <InfinitySpin ariaLabel="watch-loading" color="#111" visible={true} />
        </div>
      ) : (
        <div className={styles.category}>
          <Products props={updatedProductList}   onClick={onClickHandler}/>
          {(cartList.length > 0 || wishList.length > 0) && (
            <CartWishList   cartList={cartList}    wishList={wishList}    active={active}/>
          )}
        </div>
      )}
    </>
  );
};

export default Category;
