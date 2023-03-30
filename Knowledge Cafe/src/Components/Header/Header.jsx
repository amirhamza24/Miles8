import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='w-10/12 mx-auto flex justify-between items-center text'>
                <h1 className='text-3xl font-bold'>Team Limitless</h1>

                <nav className='font-semibold'>
                    <a href="/home">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/services">Services</a>
                    <a href="/contactUs">Contact Us</a>
                    <a href="/login">Login</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;