import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Accolade from "../components/Accolade";


const SponsorPage = () => {
    return (
        <Layout pageTitle="BSSD - Program Accolades">
            <NavOne />
            <PageHeader title="Program Accolades" />
            <Accolade />
        </Layout>
    );
};

export default SponsorPage;
