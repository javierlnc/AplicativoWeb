import React from 'react';
import Header from '../components/Header'

const Layuot = ({ children }) => {
    return (
        <div className="layout">
        <Header />
            {children}
        </div>
    );
}

export default Layuot;