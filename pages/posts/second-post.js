import Layout from "../../components/layout";
import Link from "next/link";

export default function SecondPost() {
    return (
        <Layout pageTitle="Second">
            <Link href="/">Back</Link>
            <h1>Second Post</h1>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
            </p>
        </Layout>
    );
}