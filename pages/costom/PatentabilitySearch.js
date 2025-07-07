import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Patentability from "../../components/customPages/patientService/Patentability";
export default function PatentabilitySearch() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Project Details" />
                <Patentability />
            </Layout>
        </>
    );
}