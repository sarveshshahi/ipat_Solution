import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import PatentWatchService from "@/components/customPages/Patent Analytics/PatentWatchService";
export default function Patent_Watch_Service() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <PatentWatchService/>
            </Layout>
        </>
    );
}