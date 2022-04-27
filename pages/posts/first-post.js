import Layout from "../../components/layout";
import Link from "next/link";

export default function FirstPost() {
    return (
        <Layout pageTitle="First">
            <Link href="/">Back</Link>
            <h1>First Post</h1>
        </Layout>
    );
}