import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";

const GetInvolvedPage = () => {
    return (
        <Layout pageTitle="BSSD - Get Involved">
            <NavOne />
            <PageHeader title="Get Involved" />
            <AboutArea />
        </Layout>
    );
};

export default GetInvolvedPage;
