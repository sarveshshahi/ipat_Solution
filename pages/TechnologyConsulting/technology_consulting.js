import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";


import Technology_Consulting from "@/components/customPages/TechnologyConsulting/Technology_Consulting";
export default function technology_consulting() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Consulting Servies" />
               <Technology_Consulting />
            </Layout>
        </>
    );
}