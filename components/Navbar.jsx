import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='text-xl float-right mt-2'>
            <ul className='display: flex'>
                <li>
                    <Link href="/">
                        <a className='mr-7'>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="../articles/articlesIndex">
                        <a className='mr-7'>Articles</a>
                    </Link>
                </li>
                <li>
                    <Link href="../contacts">
                        <a className='mr-7'>Contacts</a>
                    </Link>
                </li>
                <li>
                    <Link href="../about">
                        <a className='mr-7'>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
