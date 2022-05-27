import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <li><a href="/">Mis ordenes</a></li>
                <li><a href="/">Mi cuenta</a></li>
                <li><a href="/">Sign Out</a></li>
            </ul>
        </div>

    );
}

export default Menu;