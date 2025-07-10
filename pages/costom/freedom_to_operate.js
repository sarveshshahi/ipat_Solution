import React from "react";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import Chemical_Structure_Search from "@/components/customPages/patientService/Chemical_Structure_Search";
import FreedomToOperate from "@/components/customPages/patientService/FreedomToOperate";
export default function freedom_to_operate() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Freedom To Operate" />
                < FreedomToOperate/>
            </Layout>
        </>
    );
}