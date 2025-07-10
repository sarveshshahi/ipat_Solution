import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";

import DesignPatentDrawings from "@/components/customPages/PatentDrafting&Illustrations/DesignPatentDrawings";
import CompetitiveIntelligence from "@/components/customPages/Patent Analytics/CompetitiveIntelligence";
export default function competitive_intelligence() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Competitive Intelligence" />
               <CompetitiveIntelligence/>
            </Layout>
        </>
    );
}