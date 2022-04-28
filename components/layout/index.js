import Head from "next/head";

function Layout(props) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {children}
        </>
    );
}

export default Layout;