import React from 'react';
import './Footer.css'

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <h4>Copyright 2020-{currentYear} || All Right Reserved.</h4>
        </footer>
    );
};

export default Footer;