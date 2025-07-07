import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";import PatentValuationService from "@/components/customPages/IPCommercialization/PatentValuationService";
import PatentMonetizationSupport from "@/components/customPages/IPCommercialization/PatentMonetizationSupport";
import PatentInfringementAnalysis from "@/components/customPages/IPCommercialization/PatentInfringementAnalysis";
import PatentLicensingandMonetization from "@/components/customPages/IPCommercialization/PatentLicensingandMonetization";
export default function patent_licensingand_monetization () {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentLicensingandMonetization />
            </Layout>
        </>
    );
}