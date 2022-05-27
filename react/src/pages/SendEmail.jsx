import React from 'react';
import '../styles/SendEmail.scss';


const SendEmail = () => {
    return (
        <div className="SendEmail">
            <section className="mainForm">
                <img src="../assets/logoTrillizas.svg" alt="logo" className="mainForm--logo" />
                <h1>Correo Enviado</h1>
                <p>Por favor revisa tu correo, te hemos enviado un link para recuperar tu contraseña</p>
                <div className="email-logo">
                    <img src="../assets/email.svg" alt="Logo Email" />
                </div>
                <button className="primary-button">Iniciar Sesion</button>
                <p>
                    <span>¿No te ha llegado el correo?</span>
                    <a href="/">Reenviar</a>
                </p>
            </section>
        </div>
    );
}

export default SendEmail;