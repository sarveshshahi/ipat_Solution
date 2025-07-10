import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import PatentMonitoring from "@/components/customPages/Patent Analytics/PatentMonitoring";
export default function Patent_Monitoring() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentMonitoring/>
            </Layout>
        </>
    );
}