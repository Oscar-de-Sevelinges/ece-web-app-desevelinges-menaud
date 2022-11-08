import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='sticky top-[100vh] pb-2'>
            <footer>
                <Link href="https://www.linkedin.com/in/oscar-de-sevelinges-3a758a1b6/">
                    <a target="_blank" className='inline'>Oscar de Sevelinges</a>
                </Link>
                <Link href="https://twitter.com/badcitron">
                    <a target="_blank" className='inline'> Romain Menaud</a>
                </Link>
                <a className='inline float-right'>Copyrigth &copy; {year}</a>
            </footer>
        </div>

    );
}

export default Footer;
