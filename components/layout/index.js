import Head from "next/head";

const Layout = (props) => {
    const { children } = props;
    return (
        <div>
            {/* <Head>
                <title>{props.title}</title>
            </Head> */}
            {children}
        </div>
    );
}


export default Layout;
