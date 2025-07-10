import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import UtilityPatentDrawings from "@/components/customPages/PatentDrafting&Illustrations/UtilityPatentDrawings";
export default function utility_patent_drawings() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="IP Commercialization" />
               <UtilityPatentDrawings />
            </Layout>
        </>
    );
}