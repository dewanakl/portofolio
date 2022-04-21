import Head from "next/head";

const Layout = ({ props }) => (
    <div>
        <Head>
            <title>{this.props.title}</title>
        </Head>
        {this.props.children}
    </div>
);


export default Layout;
