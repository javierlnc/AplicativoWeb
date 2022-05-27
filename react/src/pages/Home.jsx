import React from 'react';
import '../styles/Home.scss';

const Home = () => {
    return (
         <div className="home">
                <a href="./login.html" className="card">
                    <div>
                    <h2>Mi Cuenta</h2>
                    <p>Inicia sesión, regístrate o modifica tus datos</p>
                    </div>         
                </a>
                <a href="#" className="card">
                    <div>
                    <h2>Productos</h2>
                    <p>Mira nuestro catalogo de productos</p>
                    </div>
                </a>
                <a href="#" className="card">
                    <div>
                    <h2>Mi pedido</h2>
                    <p>Revisa, modifica o confirma tu pedido</p>
                    </div>
                </a>
                <a href="#" className="card">
                    <div>
                    <h2>About Us</h2>
                    <p>Descubre nuestra historia y comunícate con nosotros</p>
                    </div>
                </a>
        </div>
    );
}

export default Home;