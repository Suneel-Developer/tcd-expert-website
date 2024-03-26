"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeDropdownTimerRef = useRef(null);
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 700;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Open Dropdown
  const handleMouseEnter = () => {
    clearTimeout(closeDropdownTimerRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeDropdownTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeDropdownTimerRef.current);
    };
  }, []);





  const isHomeOrLocationActive = () => {
    const isHome =
      isActive("/") || isActive("/tulsa") || isActive("/colorado-springs");
    const isLocation = isActive("/tulsa") || isActive("/colorado-springs");
    const isFirstLink = isActive("/") && isDropdownOpen;

    return isHome || isLocation || isFirstLink;
  };

  return (
    <nav
      className={`hidden base:block transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 bg-white shadow-md"
          : "relative bg-transparent"
      }`}
    >
      <div className="max-w-xxl m-auto w-full py-5 px-3 flex justify-between items-center gap-2">
        {/* Logo  */}
        <Link href="/">
          {isScrolled ? (
            <Image
              src="/assets/logo-short.webp"
              alt="other-logo"
              width={50}
              height={50}
              loading="lazy"
            />
          ) : (
            <Image
              src="/assets/logo.webp"
              alt="logo"
              width={350}
              height={109}
              loading="lazy"
            />
          )}
        </Link>

        {/* Links  */}
        <div>
          <nav className="flex items-center gap-5">
            {/* Home  */}
            <Link href="/" legacyBehavior>
              <a
                className={`p-[11px] text-xs font-bold font-raleway-Bold tracking-[2px] uppercase 
                ${
                  isHomeOrLocationActive() && isScrolled
                    ? "border-black text-dark-gray"
                    : ""
                }
                ${
                  isHomeOrLocationActive() && !isScrolled
                    ? "border-sky-blue text-sky-blue"
                    : ""
                }
                ${
                  !isHomeOrLocationActive() && isScrolled
                    ? "border-transparent text-gray-500"
                    : ""
                }
                ${
                  !isHomeOrLocationActive() && !isScrolled
                    ? "border-transparent text-white"
                    : ""
                }
                border-2 rounded-sm 
                ${
                  isScrolled
                    ? "hover:border-black hover:text-black"
                    : "hover:border-white hover:text-white"
                }
              `}
              >
                Home
              </a>
            </Link>

            {/* Meet the Team  */}
            <Link href="/team" legacyBehavior>
              <a
                className={`p-[11px] text-xs font-bold font-raleway-Bold tracking-[2px] uppercase 
                ${
                  isActive("/team") && isScrolled
                    ? "border-black text-dark-gray"
                    : ""
                }
                ${
                  isActive("/team") && !isScrolled
                    ? "border-sky-blue text-sky-blue"
                    : ""
                }
                ${
                  !isActive("/team") && isScrolled
                    ? "border-transparent text-gray-500"
                    : ""
                }
                ${
                  !isActive("/team") && !isScrolled
                    ? "border-transparent text-white"
                    : ""
                }
              border-2 rounded-sm 
             ${
               isScrolled
                 ? "hover:border-black hover:text-black"
                 : "hover:border-white hover:text-white"
             }`}
              >
                Meet the Team
              </a>
            </Link>

            {/* Services  */}
            <Link href="/services" legacyBehavior>
              <a
                className={`p-[11px] text-xs font-bold font-raleway-Bold tracking-[2px] uppercase 
                ${
                  isActive("/services") && isScrolled
                    ? "border-black text-dark-gray"
                    : ""
                }
                ${
                  isActive("/services") && !isScrolled
                    ? "border-sky-blue text-sky-blue"
                    : ""
                }
                ${
                  !isActive("/services") && isScrolled
                    ? "border-transparent text-gray-500"
                    : ""
                }
                ${
                  !isActive("/services") && !isScrolled
                    ? "border-transparent text-white"
                    : ""
                }
              border-2 rounded-sm 
             ${
               isScrolled
                 ? "hover:border-black hover:text-black"
                 : "hover:border-white hover:text-white"
             }`}
              >
                Services
              </a>
            </Link>

            {/* Location  */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/" legacyBehavior>
                <a
                  className={`p-[11px] text-xs font-bold font-raleway-Bold tracking-[2px] uppercase 
                  ${
                    isHomeOrLocationActive() && isScrolled
                      ? "border-black text-dark-gray"
                      : ""
                  }
                  ${
                    isHomeOrLocationActive() && !isScrolled
                      ? "border-sky-blue text-sky-blue"
                      : ""
                  }
                  ${
                    !isHomeOrLocationActive() && isScrolled
                      ? "border-transparent text-gray-500"
                      : ""
                  }
                  ${
                    !isHomeOrLocationActive() && !isScrolled
                      ? "border-transparent text-white"
                      : ""
                  }
                  border-2 rounded-sm 
                  ${
                    isScrolled
                      ? "hover:border-black hover:text-black"
                      : "hover:border-white hover:text-white"
                  }
                `}
                >
                  Locations
                </a>
              </Link>

              {/* Dropdown content */}
              {isDropdownOpen && (
                <div className="absolute bottom-auto top-14 left-0 w-56 p-2 bg-gunmetal-gray border border-graphite-gray flex flex-col gap-3">
                  <Link
                    href="/"
                    className={`text-charcol-gray font-semibold font-raleway-SemiBold py-1 text-xs hover:text-white transition duration-200 uppercase
                    ${isActive("/") ? "text-white" : ""}`}
                  >
                    Oklahoma City
                  </Link>
                  <Link
                    href="/tulsa"
                    className={`text-charcol-gray font-semibold font-raleway-SemiBold py-1 text-xs hover:text-white transition duration-200 uppercase
                    ${isActive("/tulsa") ? "text-white" : ""}`}
                  >
                    Tulsa
                  </Link>
                  <Link
                    href="/colorado-springs"
                    className={`text-charcol-gray font-semibold font-raleway-SemiBold py-1 text-xs hover:text-white transition duration-200 uppercase
                    ${isActive("/colorado-springs") ? "text-white" : ""}`}
                  >
                    Colorado Springs
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Us  */}
            <Link href="/contact" legacyBehavior>
              <a
                className={`p-[11px] text-xs font-bold font-raleway-Bold tracking-[2px] uppercase 
                ${
                  isActive("/contact") && isScrolled
                    ? "border-black text-dark-gray"
                    : ""
                }
                ${
                  isActive("/contact") && !isScrolled
                    ? "border-sky-blue text-sky-blue"
                    : ""
                }
                ${
                  !isActive("/contact") && isScrolled
                    ? "border-transparent text-gray-500"
                    : ""
                }
                ${
                  !isActive("/contact") && !isScrolled
                    ? "border-transparent text-white"
                    : ""
                }
              border-2 rounded-sm 
             ${
               isScrolled
                 ? "hover:border-black hover:text-black"
                 : "hover:border-white hover:text-white"
             }`}
              >
                Contact
              </a>
            </Link>

            {/* FaceBook Icon  */}
            <Link
              href="https://www.facebook.com/constructiondefectexpert/"
              target="_blank"
              className={`border-2 h-9 w-9 rounded-[3px] flex justify-center items-center text-white transition duration-200 
              ${isScrolled ? "border-black text-dark-gray" : "border-white"}
              ${isScrolled ? "hover:bg-black text-white" : "hover:bg-white"}
              `}
            >
              <FaFacebookF
                className={
                  isScrolled
                    ? "text-dark-gray hover:text-white"
                    : "text-white hover:text-black"
                }
              />
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
