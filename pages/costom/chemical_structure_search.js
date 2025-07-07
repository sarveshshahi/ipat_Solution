import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Chemical_Structure_Search from "@/components/customPages/patientService/Chemical_Structure_Search";
export default function chemical_structure_search() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Project Details" />
                < Chemical_Structure_Search/>
            </Layout>
        </>
    );
}