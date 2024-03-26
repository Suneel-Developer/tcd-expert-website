import React from "react";

const Members = () => {
  return (
    <section className="w-full max-w-xxl m-auto px-3 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <img src="/assets/Paul.webp" alt="Paul Goodman" className="rounded-full w-40 sm:w-56 h-40 sm:h-56" />
        <h4 className="text-dark-gray font-bold font-raleway-Bold text-lg uppercase tracking-[1px] leading-[20px]">Paul Goodman</h4>
        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px] text-center">
          Paul conducts all site visit inspections, completes all estimating and
          analyses, and authors all reports generated through consults. Paul
          holds most of the company’s certifications and memberships, and
          actively seeks over 70 relevant continuing education credit hours each
          year. Paul holds dual degrees in Management and Finance (Univ. of KY),
          International Business (Univ. of Manchester, UK), and Commercial Asset
          Management (NYU). Paul has produced many construction projects in OKC
          and Colorado Springs for owners, developers, architects, and the U.S.
          Army Corps of Engineers and consults on private, civil, and government
          projects to help ensure materials and installation methods are
          properly specified. Paul has 10+ years of experience in roofing and
          construction.
        </p>
      </div>
      <div className="flex flex-col justify-start items-center gap-6">
        <img src="/assets/David.webp" alt="Dave Goodman" className="rounded-full w-40 sm:w-56 h-40 sm:h-56" />
        <h4 className="text-dark-gray font-bold font-raleway-Bold text-lg uppercase tracking-[1px] leading-[20px]">Dave Goodman</h4>
        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px] text-center">
          Dave founded the first Goodman Company in 1976 and has been active in
          Oklahoma’s construction scene ever since. Dave has installed roofs all
          across the U.S., and has pioneered many experimental roofing and
          waterproofing applications. Dave assists manufacturers in new product
          design, and builds multi-million dollar homes around Oklahoma City.
        </p>
      </div>
    </section>
  );
};

export default Members;
