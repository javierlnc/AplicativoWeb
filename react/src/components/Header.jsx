import React from 'react';
import '@styles/Header.scss';
import logo from '../assets/logoTrillizas.svg';
import menu from '../assets/menu.svg';
import car from '../assets/shoppingCar1.svg'

const Header = () => {
    return (
        <nav>
            <img src={menu}alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
            </div>
            <div className="navbar-center">
                <ul>
                <li><a href="/">Mi cuenta</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="/">About Us</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                <li className="navbar-email">tucorreo@example.com</li>
                <li className="navbar-shopping-car">
                    <img src={car} alt="Shopping Car" />
                    <div>2</div>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;