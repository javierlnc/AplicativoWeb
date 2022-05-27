import React from 'react';
import '../styles/ProdcutInfo.scss';
const ProductInfo = () => {
    return (
        <>
                <img src="https://s3.amazonaws.com/storage.wobiz.com/199/199302/images/Large/1624480686_417e2e36d7a8960d7e4cc790e6c31fd1.199302.png" alt="producto" />
                <div classname="ProductInfo">
                    <p>$60.000</p>
                    <p>Gel Moldeador</p>
                    <p>Sirve para quemar grasas localizadas. Aplica uniformente sobre la regíon con movimientos circulares. Actua produciendo calor en el cuerpo</p>
                    <button classname="form--button button-car">
                    <img src="../assets/shoppingCar2.svg" alt />
                    Agregar al carrito
                    </button>
                </div>
        </>

    );
}

export default ProductInfo;