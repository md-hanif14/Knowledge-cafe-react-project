import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-name'>Knowledge Cafe</h2>
            <div>
                <a href="/Home">Home</a>
                <a href="/About us">About us</a>
                <a href="/Log in">Log in</a>
            </div>

        </div>
    );
};

export default Header;