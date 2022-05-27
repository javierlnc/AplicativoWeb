import React from 'react';
import OrderItem from '../components/OrderItem';

const Orders = () => {
    return (
        <section className="my-order">
            <div className="my-order-container">
                <h1 className="title">Mis pedidos</h1>
                <div className="my-order-content">
                <OrderItem />
                </div>
            </div>
        </section>    
    );
}

export default Orders;