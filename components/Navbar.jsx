import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="../articles/articlesIndex">
                        <a>Articles</a>
                    </Link>
                </li>
                <li>
                    <Link href="../contacts">
                        <a>Contacts</a>
                    </Link>
                </li>
                <li>
                    <Link href="../about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
