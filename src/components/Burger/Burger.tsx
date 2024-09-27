import React from 'react';
import './Burger.css';

const Burger = () => {
    return (
        <div className="Burger">
            <h3 style={{fontSize: '24px', textAlign: 'center'}}>Burger</h3>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            <div className="Salad"></div>
            <div className="Cheese"></div>
            <div className="Meat"></div>
            <div className="BreadBottom"></div>
            <p>Total price <b>30</b></p>
        </div>
    );
};

export default Burger;