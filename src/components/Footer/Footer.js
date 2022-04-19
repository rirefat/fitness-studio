import React from 'react';
import './Footer.css'
import img from '../../images/logo.png'

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer className='text-center'>
            <img src={img} className="img-fluid mt-3" alt="" />
            <p>King Street, Melbourne</p>
            <p>Victoria 3000 Australia</p>
            <p>8 800 595 82 12</p>
            <p>info@fitness-studio.com</p>
            <h4>Copyright 2020-{currentYear} || All Right Reserved.</h4>
            
        </footer>
    );
};

export default Footer;