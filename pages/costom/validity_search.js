import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Patentability from "../../components/customPages/patientService/Patentability";
import ValiditySearch from "@/components/customPages/patientService/ValiditySearch";
export default function validity_search() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName=" Validity Search" />
                <ValiditySearch />
            </Layout>
        </>
    );
}