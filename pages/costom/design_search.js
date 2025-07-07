import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Design_Search from "@/components/customPages/patientService/Design_Search";
export default function chemical_structure_search() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Project Details" />
                < Design_Search/>
            </Layout>
        </>
    );
}