import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import DesignPatentDrawings from "@/components/customPages/PatentDrafting&Illustrations/DesignPatentDrawings";
export default function design_patent_drawings() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Design Patent Drawings" />
               < DesignPatentDrawings/>
            </Layout>
        </>
    );
}