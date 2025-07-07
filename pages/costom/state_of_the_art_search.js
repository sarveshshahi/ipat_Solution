import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Patentability from "../../components/customPages/patientService/Patentability";
import State_of_the_Art_Search from "@/components/customPages/patientService/State_of_the_Art_Search";
export default function state_of_the_art_search() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Project Details" />
                <State_of_the_Art_Search />
            </Layout>
        </>
    );
}