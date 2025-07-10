import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ServiceGrid from "../components/sections/ServicesGrid";
import Brand from "../components/sections/Home12/Brand";
export default function ServiceGridPage() {

    return (
        <>
            <Layout HeaderStyle="eight">
                <PageTitle pageName="Industries" />
                <ServiceGrid />
                {/* <Brand /> */}
            </Layout>
        </>
    );
}