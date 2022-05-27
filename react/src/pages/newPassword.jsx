import React from 'react';
import '../styles/NewPassword.scss';

const newPassword = () => {
    return (
       <div className="newPassword">
        <section className="newPassword-container">
            <img src="../assets/logoTrillizas.svg" alt="logo" className="logo" />
            <h1>Crea Una Nueva Contraseña</h1>
            <p>Ingresa una contraseña nueva</p>
            <form action="/" className="newPassword-container--form">
            <label htmlFor="password" className="form--label">Ingresa nueva contraseña</label>
            <input type="password" placeholder="********" id="password" className="form--input" />
            <label htmlFor="re-password" className="form--label">Confirma tu contraseña</label>
            <input type="password" placeholder="********" id="re-password" className="form--input" />
            <input type="submit" defaultValue="Confirmar" className="form--button" />
            </form>
        </section>
    </div>

    );
}

export default newPassword;