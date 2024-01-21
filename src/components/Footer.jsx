import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p style={textStyle}>© 2024 Дом Лучшей Еды. Все права защищены.</p>
            <div style={iconContainerStyle}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={iconStyle}/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook style={iconStyle}/>
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                    <FaTelegram style={iconStyle}/>
                </a>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    bottom: '0px',
    width: '100%',
        
};

const textStyle = {
    margin: '0',
};

const iconContainerStyle = {
    marginTop: '10px',
};

const iconStyle = {
    textDecoration: 'none',
    width: '30px',
    height: '30px',
    margin: '0 10px',
};

export default Footer;
