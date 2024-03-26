import Head from "next/head";
import Footer from "../components/Footer";
import AccordinTwo from "../components/Services/AccordinTwo";
import AccordionOne from "../components/Services/AccordionOne";
import Hero from "../components/Testimonials/Hero";

export const metadata = {
  title: "Goodman Consulting | Services",
};

const Service = () => {
  return (
    <main>
      <Head>
        <title>{metadata.title}</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="robots" content="max-image-preview:large" />
      </Head>

      <Hero pageTitle="Services" />
      <section className="max-w-xxl m-auto py-10 sm:py-20 w-full px-3">
        <div className="w-full max-w-2xl m-auto text-center">
          <h1 className="text-dark-gray leading-[1.5em] text-2xl md:text-3xl font-raleway-Bold font-bold mb-5">
            Goodman Consulting specializes in resolving defects in roofing and
            construction.
          </h1>
        </div>
        <AccordionOne />
        <AccordinTwo />
      </section>
      <Footer />
    </main>
  );
};

export default Service;
