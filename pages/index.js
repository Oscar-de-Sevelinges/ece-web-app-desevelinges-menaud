import Link from "next/link"
import styles from "../styles/Home.module.css"

function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a className={styles.test}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/articles/articlesIndex">
          <a className={styles.test}>Articles</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <a className={styles.test}>Contacts</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className={styles.test}>About</a>
        </Link>
      </li>
    </ul>
  )
}

export default HomePage