import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopDetails from "../components/sections/ShopDetails";
export default function PageShopDetails() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Product Deatils" />
                <ShopDetails />
            </Layout>
        </>
    );
}