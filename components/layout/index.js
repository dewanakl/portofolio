import Head from "next/head";

function Layout(props) {
    const { children, pageTitle } = props;
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {children}
        </div>
    );
}

export default Layout;