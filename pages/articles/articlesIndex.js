import Link from "next/link";

function Articles() {
    return (
        <>
            <p className="text-green-600">Articles :</p>
            <ul>
                <li>
                    <Link href="/articles/1">
                        <a>Article 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/2">
                        <a>Article 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles/3">
                        <a>Article 3</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Articles;