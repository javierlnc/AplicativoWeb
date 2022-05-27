import React from "react";
import'../styles/login.scss';
const login = () => {
    return (
        <main className="mainContent">
            <section className="mainForm">
                <img src="../assets/logoTrillizas.svg" alt="logo" className="mainForm--logo" />
                <h1>Crea Una Nueva Contraseña</h1>
                <p>Ingresa una contraseña nueva</p>
                <form action="/" className="mainForm--form">
                <label htmlFor="password" className="form--label">Ingresa nueva contraseña</label>
                <input type="password" placeholder="********" id="password" className="form--input" />
                <label htmlFor="re-password" className="form--label">Confirma tu contraseña</label>
                <input type="password" placeholder="********" id="re-password" className="form--input" />
                <input type="submit" defaultValue="Confirmar" className="form--button" />
                </form>
            </section>
        </main>

    );
}

export default login;