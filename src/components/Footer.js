import React from 'react';
import footerStyles from "./Footer.module.css"
const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container">
            <span>© {(new Date().getFullYear())} </span>
        </div>
    </footer>
);

export default Footer;