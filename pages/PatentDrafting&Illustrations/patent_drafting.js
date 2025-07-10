import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import PatentInfringementAnalysis from "@/components/customPages/IPCommercialization/PatentInfringementAnalysis";
import PatentDrafting from "@/components/customPages/PatentDrafting&Illustrations/PatentDrafting";
export default function patent_drafting() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentDrafting />
            </Layout>
        </>
    );
}