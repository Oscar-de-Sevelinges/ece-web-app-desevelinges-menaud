import React from 'react';

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
