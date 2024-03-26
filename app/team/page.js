import Head from "next/head";
import Footer from "../components/Footer";
import Members from "../components/Team/Members";
import ServiceBox from "../components/Team/ServiceBox";
import Hero from "../components/Testimonials/Hero";

export const metadata = {
  title: "Goodman Consulting | Meet The Team",
};

const Team = () => {
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
        <Hero pageTitle="Meet the team" />
        <Members />
        <ServiceBox />
        <Footer />
      </main>
    </>
  );
};

export default Team;
