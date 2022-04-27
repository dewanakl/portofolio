import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Layout pageTitle="Home">
            <div className={styles.container}>
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
                    <Link href="/posts/second-post">
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <h3>second Post</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/posts/three-post">
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <h3>three Post</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </p>
                            </div>
                        </div>
                    </Link>
                </main>
                <footer className={styles.footer}></footer>
            </div>
        </Layout>
    );
}