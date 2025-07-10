import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Patentability from "../../components/customPages/patientService/Patentability";
import Assignee_Search from "@/components/customPages/patientService/Assignee_Search";
export default function assignee_search() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Assignee Search" />
                < Assignee_Search/>
            </Layout>
        </>
    );
}