import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import PatentWatchService from "@/components/customPages/Patent Analytics/PatentWatchService";
import PatentPortfolioManagement from "@/components/customPages/Patent Analytics/PatentPortfolioManagement";
export default function Patent_Portfolio_Management() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentPortfolioManagement/>
            </Layout>
        </>
    );
}