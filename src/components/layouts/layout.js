import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>WP NextJS</title>
                <meta name="description" content="Template for creating NextJS app for Headless WordPress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className="wd-content">{props.children}</div>
        </div>
    );
};

export default Layout;
