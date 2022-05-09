import { Fragment } from "react";
import Head from 'next/head';

const Layout = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props?.title} | WP NextJS</title>
                <meta name="description" content="Boilerplate for creating NextJS app for Headless WordPress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className="wp-content">{props.children}</div>
        </Fragment>
    );
};

export default Layout;
