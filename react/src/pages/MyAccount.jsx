import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
   <div className="myAccount">
        <section className="myAccount-container">
            <h1>Mi cuenta</h1>           
            <form action="/" className="myAccount-container--form">
            <div>
                <label htmlFor="name" className="form--label">Nombre</label>
                <p className="value">Nombre y apellido</p>
                <label htmlFor="email" className="form--label">Email</label>
                <p className="value">tucorreo@example.com</p>
                <label htmlFor="password" className="form--label">Contraseña</label>
                <p className="value">********</p>
                <label htmlFor="re-password" className="form--label">Confirma tu contraseña</label>
                <p className="value">********</p>
            </div>
            <input type="submit" defaultValue="Editar" className="secundary-button" />
            </form>
        </section>
    </div>
 
    );
}

export default MyAccount;