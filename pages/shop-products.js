import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopProduct from "../components/sections/ShopProduct";
export default function PageShopProduct() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Shop" />
                <ShopProduct />
            </Layout>
        </>
    );
}