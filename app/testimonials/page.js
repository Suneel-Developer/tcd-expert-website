import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Clients from "../components/Testimonials/Clients";
import Hero from "../components/Testimonials/Hero";

export const metadata = {
  title: "Goodman Consulting | Testimonials",
};

const Testimonials = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="robots" content="max-image-preview:large" />
      </Head>
      <Hero pageTitle="Testimonials" />
      <Clients />
      <Footer />
    </>
  );
};

export default Testimonials;
