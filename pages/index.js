import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import EntryArea from "../components/EntryArea";
import HiwArea from "../components/HiwArea";
import ServiceArea from "../components/ServiceArea";
import MixerArea from "../components/MixerArea";
import ClientsLogo from "../components/ClientsLogo";
import HelpingArea from "../components/HelpingArea";
import CallToAction from "../components/CallToAction";
import BlogHome from "../components/BlogHome";
import CallToActionTwo from "../components/CallToActionTwo";

const HomePage = () => {
    return (
        <Layout pageTitle="Battle for Spartan Swim & Dive">
          <NavOne />
          <SliderOne />
          <EntryArea />
          <HiwArea />
          <ServiceArea />
          <MixerArea />
          <ClientsLogo />
          <HelpingArea />
          <CallToAction />
          <BlogHome />
          <CallToActionTwo />
          <Footer />
        </Layout>
    );
};

export default HomePage;
