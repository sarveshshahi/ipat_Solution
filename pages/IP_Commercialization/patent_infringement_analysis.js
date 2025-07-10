import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";import PatentValuationService from "@/components/customPages/IPCommercialization/PatentValuationService";
import PatentMonetizationSupport from "@/components/customPages/IPCommercialization/PatentMonetizationSupport";
import PatentInfringementAnalysis from "@/components/customPages/IPCommercialization/PatentInfringementAnalysis";
export default function patent_infringement_analysis() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Patent Infringer/Licensee Identification" />
               <PatentInfringementAnalysis />
            </Layout>
        </>
    );
}