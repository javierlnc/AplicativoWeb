import React from 'react';

const ProductItem = () => {
    return (
        <div className="product-info">
            <div>
                <p>Precio</p>
                <p>Nombre del prodcuto</p>   
            </div>                   
            <figure>
                <img src="../assets/addToCar.svg" alt="" />
            </figure>
        </div>      
    );
}

export default ProductItem;