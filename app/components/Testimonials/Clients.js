"use client";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Clients = () => {
  const testimonials = [
    {
      quote:
        "We present a unique opportunity for investors to access IFC’s superior track record in emerging.",
      author: "- Kim Wilkinson",
    },

    {
      quote:
        "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on.",
      author: "Steve Jobs, Businessman",
    },

    {
      quote:
        "When you start with a portrait and search for a pure form, a clear volume, through successive eliminations, you arrive inevitably at the egg. Likewise, starting with the egg and following the same process in reverse, one finishes with the portrait.",
      author: "Pablo Picasso, Artist",
    },

    {
      quote:
        "If you're trying to achieve, there will be roadblocks. I've had them; everybody has had them. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
      author: "Michael Jordan, Player",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentSlide]);

  return (
    <section className="max-w-xxl w-full mx-auto px-3 py-10">
      <div>
        <h1 className="text-dark-gray text-2xl sm:text-[32px] font-raleway-Bold font-bold leading-[40px] tracking-[3px] uppercase text-center">
          What past clients say
        </h1>
      </div>
      <div className="relative max-w-4xl w-full mx-auto text-center mt-10">
        <ul className="h-96 xs:h-80 sm:h-56 md:h-[190px]">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              style={{ transition: "ease-in-out 2s", display: index === currentSlide ? "block" : "none" }}
            >
              <p className="text-black-700 text-lg sm:text-xl font-raleway-Regular font-normal leading-[35px] mb-10">
                {testimonial.quote}
              </p>
              <h3 className="text-dark-gray text-base font-raleway-Bold font-fold tracking-[1px] leading-[20px] mb-10 uppercase">
                - {testimonial.author}
              </h3>
            </li>
          ))}
        </ul>
        <ul className="static flex gap-4 justify-center items-center mt-5">
          <li
            onClick={prevSlide}
            className="w-9 h-9 rounded-sm border-2 border-sky-blue flex justify-center items-center text-black-700 hover:bg-sky-blue hover:text-white transition duration-200 cursor-pointer"
          >
            <MdChevronLeft className="text-2xl" />
          </li>
          <li
            onClick={nextSlide}
            className="w-9 h-9 rounded-sm border-2 border-sky-blue flex justify-center items-center text-black-700 hover:bg-sky-blue hover:text-white transition duration-200 cursor-pointer"
          >
            <MdChevronRight className="text-2xl" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
