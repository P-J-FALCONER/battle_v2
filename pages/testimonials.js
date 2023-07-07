import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Testimonial from "../components/Testimonial";


const SponsorPage = () => {
    return (
        <Layout pageTitle="BSSD - Sponsors">
            <NavOne />
            <PageHeader title="Testimonials" />
            <Testimonial />
        </Layout>
    );
};

export default SponsorPage;
