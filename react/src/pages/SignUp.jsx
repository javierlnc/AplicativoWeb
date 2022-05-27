import React from 'react';
import '../styles/SignUp.scss';
const CreateAccount = () => {
    return (
        <div className="signUp">
            <section className="signUp-container">
                <h1>Mi cuenta</h1>           
                <form action="/" className="singUp-container--form">
                <div>
                    <label htmlFor="name" className="form--label">Nombre</label>
                    <input type="text" placeholder="Nombre y apellidos" id="name" className="form--input" />
                    <label htmlFor="email" className="form--label">Email</label>
                    <input type="email" placeholder="tucorreo@example.com" id="email" className="form--input" />
                    <label htmlFor="password" className="form--label">Contraseña</label>
                    <input type="password" placeholder="********" id="password" className="form--input" />
                    <label htmlFor="re-password" className="form--label">Confirma tu contraseña</label>
                    <input type="password" placeholder="********" id="re-password" className="form--input" />
                </div>
                <input type="submit" defaultValue="Guardar" className="form--button" />
                </form>
            </section>
        </div>

    );
}

export default CreateAccount;