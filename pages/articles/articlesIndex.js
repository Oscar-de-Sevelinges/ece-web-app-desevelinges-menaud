import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { users: data },
    };
};

function Articles({ users }) {
    return (
        <>
            <p className="text-green-600">Articles :</p>
            <ul className="font-bold">
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
            <p className="text-green-600">Customers :</p>
            {users.map((user) => (
                <ul key={user.id}>
                    <li>
                        <a>{user.name}</a>
                    </li>
                </ul>
            ))}
        </>
    );
}

export default Articles;