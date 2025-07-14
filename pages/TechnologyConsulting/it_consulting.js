import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";


import Technology_Consulting from "@/components/customPages/TechnologyConsulting/Technology_Consulting";
import ITConsulting from "../../components/customPages/TechnologyConsulting/ITConsulting";
export default function itconsulting(){

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IT Consulting" />
               <ITConsulting />
            </Layout>
        </>
    );
}