import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";import PatentValuationService from "@/components/customPages/IPCommercialization/PatentValuationService";
import PatentMonetizationSupport from "@/components/customPages/IPCommercialization/PatentMonetizationSupport";
import PatentInfringementAnalysis from "@/components/customPages/IPCommercialization/PatentInfringementAnalysis";
import PatentInfringer_LicenseeIdentification from "@/components/customPages/IPCommercialization/PatentInfringer_LicenseeIdentification";
export default function patent_infringer_licensee_identification() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Patent Infringer/Licensee Identification" />
               <PatentInfringer_LicenseeIdentification />
            </Layout>
        </>
    );
}