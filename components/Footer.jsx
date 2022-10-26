import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div >
            <footer>
                <p>Copyrigth &copy; {year}</p>
            </footer>
        </div>

    );
}

export default Footer;
