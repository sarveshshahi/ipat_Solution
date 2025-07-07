import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import PatentMining from "@/components/customPages/IPCommercialization/PatentMining";
export default function patent_mining() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentMining />
            </Layout>
        </>
    );
}