import Head from 'next/head';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "IPat Solutions"}</title>
                <link rel="shortcut icon" href="assets/images/logo/Logo PNG.png" type="image/x-icon" />                
            </Head>
        </>
    );
};

export default PageHead;