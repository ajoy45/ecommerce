import React from 'react';
import logo from '../../src/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
            <a href="/Buy">Buy</a>
            </div>
            

        </div>
    );
};

export default Header;