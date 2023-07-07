import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import News from "../components/News";

const MediaPressPage = () => {
    return (
        <Layout pageTitle="BBSD - News">
            <NavOne />
            <PageHeader title="News & Press Releases" />
            <News />
        </Layout>
    );
};

export default MediaPressPage;
