import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import PatentValuationService from "@/components/customPages/IPCommercialization/PatentValuationService";
export default function patient_valuation_service() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentValuationService />
            </Layout>
        </>
    );
}