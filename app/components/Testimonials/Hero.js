import React from "react";
import MobileHeader from "../MobileHeader";
import Navbar from "../Navbar";

const Hero = ({ pageTitle }) => {
  return (
    <section className="base:bg-[url('/assets/testimonilas1.webp')] bg-cover bg-no-repeat base:h-96 relative">
      <Navbar />
      <MobileHeader />
      <div className="base:bg-none bg-[url('/assets/testimonilas1.webp')] bg-cover bg-no-repeat base:h-auto h-72 flex justify-center items-center">
        <h1 className="text-center text-3xl sm:text-5xl uppercase base:mt-10 font-raleway-Bold font-bold tracking-[4px] leading-[47px] text-white">
          {pageTitle}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
