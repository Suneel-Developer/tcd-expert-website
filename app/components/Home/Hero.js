"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar";
import MobileHeader from "../MobileHeader";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const router = useRouter();

  // AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  // Parallax Animation
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigate to Service Page
  const HandleNavigateService = () => {
    router.push("/services");
  };

  // Navigate to Contact Page
  const HandleNavigateContact = () => {
    router.push("/contact");
  };

  return (
    <section
      className="relative base:h-screen base:bg-[url('/assets/hero.webp')] bg-no-repeat bg-cover bg-center "
      style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
    >
      <Navbar />
      <MobileHeader />

      <div className="base:h-auto h-screen base:bg-none bg-[url('/assets/hero.webp')] bg-no-repeat bg-cover bg-center base:block flex items-center ">
        <div className="flex flex-col max-w-xxl px-3 mx-auto">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-start text-3xl sm:text-5xl md:text-[75px] uppercase base:mt-10 font-raleway-Light font-extralight leading-[45px] sm:leading-[65px] md:leading-[90px] text-white"
          >
            Construction <br />
            Expert <b className="font-raleway-Bold font-bold">Witness</b>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-lg md:text-2xl font-raleway-Medium font-medium text-white mb-10 mt-3"
          >
            Construction defect expert, residential & commercial roof inspector,
            and umpire services provider.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex gap-3 mt-10 justify-center sm:justify-start flex-col sm:flex-row items-center sm:items-start"
          >
            <button
              onClick={HandleNavigateService}
              className="bg-white border-2 border-white text-dark-gray hover:bg-sky-blue hover:text-white hover:border-sky-blue h-12 sm:h-[60px] hover:w-48 w-[179px] rounded-sm p-3 font-bold font-raleway-Bold text-xs uppercase tracking-[2.5px] transition-all duration-200"
            >
              Our Services
            </button>
            <button
              onClick={HandleNavigateContact}
              className="bg-transparent border-2 border-white text-white hover:bg-sky-blue hover:border-sky-blue hover:w-48 h-12 sm:h-[60px] w-[179px] rounded-sm p-3 font-bold font-raleway-Bold text-xs uppercase tracking-[2.5px] transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
