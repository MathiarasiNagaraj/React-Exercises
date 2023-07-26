import React from 'react'
import styles from './PlacedOrder.module.scss'
import { ORDER_CONFIRMATION } from '../../constants/components'
import ProductCard from '../../components/productcard/ProductCard'

/**
 * A component for displaying the placed order page with the placed items.
 * @returns {JSX.Element} - The placed order page displaying the placed items.
 */
const PlacedOrders = () => {

  //fetching data from localhost
  const storedData = JSON.parse(localStorage.getItem("cartList"));

    const item=storedData?.map(item=><ProductCard props={item}></ProductCard>)
  return (
      <div className={styles.container}>
          <h1>{ORDER_CONFIRMATION.title}</h1>
          <p className={styles.description}>{ORDER_CONFIRMATION.description}</p>
          <div className={styles.cardContainer}>
         {item}</div>
    </div>
  )
}



export default PlacedOrders