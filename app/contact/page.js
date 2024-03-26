import Head from "next/head";
import React from "react";
import Form from "../components/Contact/Form";
import Footer from "../components/Footer";
import Hero from "../components/Testimonials/Hero";

export const metadata = {
  title: "Goodman Consulting | Contact",
};

const Contact = () => {
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

      <main>
        <Hero pageTitle="Contact" />
        <Form />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
