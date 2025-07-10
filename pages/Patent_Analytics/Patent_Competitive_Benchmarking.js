import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import PatentMonitoring from "@/components/customPages/Patent Analytics/PatentMonitoring";
import PatentCompetitiveBenchmarking from "@/components/customPages/Patent Analytics/PatentCompetitiveBenchmarking";
export default function Patent_Competitive_Benchmarking() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentCompetitiveBenchmarking/>
            </Layout>
        </>
    );
}