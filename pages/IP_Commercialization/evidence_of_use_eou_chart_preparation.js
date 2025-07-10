import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";import PatentValuationService from "@/components/customPages/IPCommercialization/PatentValuationService";
import PatentMonetizationSupport from "@/components/customPages/IPCommercialization/PatentMonetizationSupport";
import PatentInfringementAnalysis from "@/components/customPages/IPCommercialization/PatentInfringementAnalysis";
import EvidenceOfUseChartPreparation from "@/components/customPages/IPCommercialization/EvidenceOfUseChartPreparation";
export default function evidence_of_use_eou_chart_preparation() {
 
    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Evidence of Use (EoU) Chart Preparation" />
               <EvidenceOfUseChartPreparation />
            </Layout>
        </>
    );
}