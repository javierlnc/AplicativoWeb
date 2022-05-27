import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
const MyOrder = () => {
    return (
        <aside className="product-detail">
            <div className="title-container">
                <img src="../assets/flechita.svg" alt="Atras" />
                <h2 className="title">Shopping Car</h2>
            </div>
            <div className="my-order-container">
                <OrderItem />
            </div>
            <div>
  <div className="order">
    <p>
      <span>Total</span>
      <span>3 articulos</span>
    </p>
    <p>
      $500.00 COP
    </p>
  </div>
  <button className="form--button button-car">Checkout</button>
</div>

        </aside>

    );
}

export default MyOrder;