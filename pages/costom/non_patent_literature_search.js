import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import Non_Patent_Literature_Search from "@/components/customPages/patientService/Non-Patent_Literature_Search";
export default function non_patent_literature_search() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Project Details" />
                < Non_Patent_Literature_Search/>
            </Layout>
        </>
    );
}