import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import Hero from './Hero';

const Header = () => {
    return (
        <header className='headerbackground'>
            <div className="headerbgleayer">
                <div className="container mx-auto">
                    <Navbar/>
                    <Hero/>
                </div>
            </div>
        </header>
    );
};

export default Header;