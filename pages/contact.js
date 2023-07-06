import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


const ContactPage = () => {
    return (
        <Layout pageTitle="BSSD - Contact Us">
            <NavOne />
            <PageHeader title="Contact" />
            <Contact />
            <Footer />
        </Layout>
    );
};

export default ContactPage;
