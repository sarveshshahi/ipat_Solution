import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import PatentInfringementAnalysis from "@/components/customPages/IPCommercialization/PatentInfringementAnalysis";
import PatentDrafting from "@/components/customPages/PatentDrafting&Illustrations/PatentDrafting";
import OfficeActionResponse from "@/components/customPages/PatentDrafting&Illustrations/OfficeActionResponse";
export default function office_action_response() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Office Action Response" />
               <OfficeActionResponse />
            </Layout>
        </>
    );
}