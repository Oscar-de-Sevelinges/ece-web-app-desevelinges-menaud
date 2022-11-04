import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='text-xl'>
            <ul className='display: flex'>
                <li className='p-7 bg-blue-500 hover:bg-blue-700'>
                    <Link href="/">
                        <a className='p-7'>Home</a>
                    </Link>
                </li>
                <li className='p-7 bg-blue-500 hover:bg-blue-700'>
                    <Link href="../articles/articlesIndex">
                        <a className='p-7'>Articles</a>
                    </Link>
                </li>
                <li className='p-7 bg-blue-500 hover:bg-blue-700'>
                    <Link href="../contacts">
                        <a className='p-7'>Contacts</a>
                    </Link>
                </li>
                <li className='p-7 bg-blue-500 hover:bg-blue-700'>
                    <Link href="../about">
                        <a className='p-7'>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
