import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import LandscapeAnalysis from "@/components/customPages/Patent Analytics/LandscapeAnalysis";
export default function Landscape_Analysis() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <LandscapeAnalysis/>
            </Layout>
        </>
    );
}