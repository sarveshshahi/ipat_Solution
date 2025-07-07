import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";import PatentValuationService from "@/components/customPages/IPCommercialization/PatentValuationService";
import PatentMonetizationSupport from "@/components/customPages/IPCommercialization/PatentMonetizationSupport";
export default function patent_monetization_support() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentMonetizationSupport />
            </Layout>
        </>
    );
}