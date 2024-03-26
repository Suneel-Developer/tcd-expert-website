import Link from "next/link";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="max-w-xxl w-full mx-auto px-3 py-10 my-10">
      <div className="w-full max-w-2xl m-auto text-center">
        <h1 className="text-sky-blue leading-[1.5em] text-2xl md:text-3xl font-raleway-Bold font-bold mb-5">
          Goodman Consulting Provides Construction Defect Expert Services in
          Oklahoma City, Tulsa, & Colorado Springs
        </h1>
        <p className="text-dark-gray leading-[34px] text-base md:text-xl font-raleway-Light font-light">
          Paul, Dave, and Elizabeth focus on bringing their past experience and
          current building and construction practice to clearly resolve disputes
          and shed light on hard-to-solve-problems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 base:grid-cols-4 gap-7 mt-10">
        {/* Services  */}
        <div className="flex flex-col text-center gap-5 justify-start items-center">
          <Link href="/services">
            <Image
              src="/assets/briefcase.webp"
              alt="briefcash"
              width={65}
              height={100}
              loading="lazy"
            />
          </Link>
          <Link
            href="/services"
            className="text-dark-gray font-bold font-raleway-Bold tracking-[1px] leading-[20px] text-lg uppercase transition-colors duration-200 hover:text-sky-blue"
          >
            What we do
          </Link>
          <p className="text-black-700 font-normal font-raleway-Regular leading-[26px] text-sm">
            Often getting to the root of a problem with your structure can be
            filled with uncertainty. We assist attorneys, homeowners, adjusters,
            commercial property owners, developers, and contractors in
            discovering the cause of their issue; we also quantify the damages
            and provide all needed documentation along the way.
          </p>
        </div>

        {/* Services  */}
        <div className="flex flex-col text-center gap-5 justify-start items-center">
          <Link href="services">
            <Image
              src="/assets/flag.webp"
              alt="flag"
              width={65}
              height={100}
              loading="lazy"
            />
          </Link>
          <Link
            href="/services"
            className="text-dark-gray font-bold font-raleway-Bold tracking-[1px] leading-[20px] text-lg uppercase transition-colors duration-200 hover:text-sky-blue"
          >
            OUR SERVICES
          </Link>
          <p className="text-black-700 font-normal font-raleway-Regular leading-[26px] text-sm">
            We are your
            <b className="font-bold ml-1">
              construction expert witness, construction defect expert,
              residential & commercial roof inspector, and umpire services
              provider in
            </b>
            <Link href="/" className="font-bold text-sky-blue ml-1">
              Oklahoma City,
            </Link>
            <Link href="/tulsa" className="font-bold text-sky-blue mx-1">
              Tulsa
            </Link>
            &
            <Link
              href="/colorado-springs"
              className="font-bold text-sky-blue mx-1"
            >
              Colorado Springs
            </Link>
            . From simple ’state of the property reporting (Owner Advocate), to
            material failure analysis, to multi-trade assignment of liability
            matrices, we’ll have your back for as long as you need us.
          </p>
        </div>

        {/* Hire us  */}
        <div className="flex flex-col text-center gap-5 justify-start items-center">
          <Link href="/team">
            <Image
              src="/assets/star.webp"
              alt="star"
              width={65}
              height={100}
              loading="lazy"
            />
          </Link>
          <Link
            href="/team"
            className="text-dark-gray font-bold font-raleway-Bold tracking-[1px] leading-[20px] text-lg uppercase transition-colors duration-200 hover:text-sky-blue"
          >
            WHY HIRE US
          </Link>
          <p className="text-black-700 font-normal font-raleway-Regular leading-[26px] text-sm">
            In most cases, you only have one shot to present your side before a
            decision or judgement is made. Make that shot count the most by
            hiring us: our reporting is, on average, four times more detailed
            than the “other guy’s”, with citations, photos and drawings used to
            illustrate complex concepts in ways the average joe can easily
            understand
          </p>
        </div>

        {/* Past Clients  */}
        <div className="flex flex-col text-center gap-5 justify-start items-center">
          <Link href="/testimonials">
            <Image
              src="/assets/globe.webp"
              alt="globe"
              width={55}
              height={100}
              loading="lazy"
            />
          </Link>
          <Link
            href="/testimonials"
            className="text-dark-gray font-bold font-raleway-Bold tracking-[1px] leading-[20px] text-lg uppercase transition-colors duration-200 hover:text-sky-blue"
          >
            Some Past Clients
          </Link>
          <p className="text-black-700 font-normal font-raleway-Regular leading-[26px] text-sm">
            Oklahoma Natural Gas Starr Companies Tristar Risk Management
            Commercial Property Owners & Developers Chubb Insurance AmTrust
            Group Residential Homeowners Multi Family Property Managers Top Tier
            Oklahoma Builders, Architects, & Attorneys City of Chickasha Lowe’s
            Companies, Inc
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
