import React from 'react';
import ProductInfo from '../components/ProductInfo';

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src="../assets/cerrar.svg" alt="close" />
            </div>
            <ProductInfo />
        </aside>

    );
}

export default ProductDetail;