import React from "react";
import '../styles/login.scss';
const login = () => {
    return (
        <div className="login">
            <section className="login-container">
                <img src="../assets/logoTrillizas.svg" alt="logo" className="logo" />
                <form action="/" className="login-container--form">
                <label htmlFor="email" className="form--label">Email</label>
                <input type="email" placeholder="tucorreo@example.com" id="email" className="form--input" />
                <label htmlFor="password" className="form--label">Contraseña</label>
                <input type="password" placeholder="********" id="password" className="form--input" />
                <input type="submit" defaultValue="Iniciar Sesion" className="form--button" />
                <a href="/">¿Haz olvidado tu contraseña?</a>
                </form>
                <button className="secundary-button">Registrate</button>
            </section>
        </div>


    );
}

export default login;