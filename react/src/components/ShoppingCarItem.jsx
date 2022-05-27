import React from 'react';
const ShoppingCarItem = () => {
    return (
        <div className="shoppingCarItem">
            <figure>
                <img src="https://s3.amazonaws.com/storage.wobiz.com/199/199302/images/Large/1624565901_2184bbf0442d8c5deac7a900aab94ff5.199302.jpeg" alt />
            </figure>
            <p>Producto</p>
            <p>Precio</p>
            <img src="../assets/cerrar.svg" alt="Cerrar" />
        </div>

    );
}

export default ShoppingCarItem;