import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderTwo from "../components/SliderTwo";
import CallToActionTwo from "../components/CallToActionTwo";
import FaqArea from "../components/FaqArea";

const HomePage = () => {
    return (
        <Layout pageTitle="Battle for Spartan Swim & Dive">
          <NavOne />
          <SliderTwo />
          <FaqArea />
          <CallToActionTwo />
        </Layout>
    );
};

export default HomePage;
