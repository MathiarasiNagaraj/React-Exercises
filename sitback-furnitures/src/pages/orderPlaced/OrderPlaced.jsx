import React, { useEffect } from 'react';
import Home from '../home/Home';
import PlacedOrders from '../../containers/placedOrders/PlacedOrders';

/**
 * A component for rendering the order placed page.
 * This component displays the placed orders and clears the cart when returning to the home page.
 * @returns {JSX.Element} - The order placed page component.
 */
const OrderPlaced = () => {
  useEffect(() => {
    // Clear the cart when returning back to home
    return () => {
     localStorage.setItem('cartList', JSON.stringify([]));
    };
  }, []);

  return (
    <div>
      <PlacedOrders />
      <Home styleClass="order" />
    </div>
  );
};


export default OrderPlaced;
