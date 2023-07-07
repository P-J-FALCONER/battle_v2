import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Donate from "../components/Donate";
import FaqPledge from "../components/FaqPledge"

const PledgePage = () => {
    return (
        <Layout pageTitle="BSSD - Pledge Support">
            <NavOne />
            <PageHeader title="Pledge Support" />
            <FaqPledge />
        </Layout>
    );
};

export default PledgePage;
