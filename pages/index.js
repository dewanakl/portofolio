import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Blog</h1>
                <Link href="/posts/first-post">
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>First Post</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                        </div>
                    </div>
                </Link>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}