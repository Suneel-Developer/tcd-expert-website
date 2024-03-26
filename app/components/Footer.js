"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const HandleNavigate = () => {
    router.push("/contact");
  };
  return (
    <section>
      {/* Section 1  */}
      <div className="w-full bg-[url('/assets/footer.webp')] bg-cover">
        <div className="max-w-xxl m-auto w-full py-14 px-3 grid-cols-1 grid md:grid-cols-4 gap-5">
          <div>
            <h2 className="text-white font-bold font-raleway-Bold text-sm sm:text-lg uppercase tracking-[2px] leading-[20px] mb-5">
              NEED A CONSULTATION?
            </h2>
            <p className="text-white font-normal font-raleway-normal text-base leading-[26px] mb-10">
              Your info is NEVER shared with anyone else.
            </p>
            <button
              onClick={HandleNavigate}
              className="bg-white border border-white text-dark-gray hover:bg-blue-100 hover:border-blue-100 hover:text-white h-12 sm:h-14 rounded-sm px-4 sm:px-8 font-bold font-raleway-Bold text-sm uppercase tracking-[2.5px] transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>

          <div className="flex flex-col md:ml-14 mt-10 md:mt-0">
            <h2 className="text-white font-bold font-raleway-Bold text-sm sm:text-lg uppercase tracking-[2px] leading-[20px] mb-5">
              CONTACT INFO
            </h2>
            <strong className="text-white font-bold font-raleway-bold text-sm leading-[26px] mb-5">
              Goodman Consulting
            </strong>
            <Link
              href="https://www.google.com/maps/place/401+NE+139th+St+%2317,+Edmond,+OK+73013/@35.6120397,-97.5095499,17z/data=!3m1!4b1!4m5!3m4!1s0x87b21ebe95b6d6af:0x9a8bd35420e10a0e!8m2!3d35.6120354!4d-97.5073612"
              className="max-w-[125px] text-gray-100 text-sm transition-colors duration-200 hover:text-white  leading-[26px] font-normal font-raleway-Regular"
            >
              401 NE 139th Street Suite 17 Edmond, OK 73013
            </Link>
            <Link
              href="tel:405-474-2828"
              className="text-gray-100 text-sm transition-colors duration-200 hover:text-white mt-1 leading-[26px] font-normal font-raleway-Regular"
            >
              Phone: 405.474.2828
            </Link>
          </div>
        </div>
      </div>

      {/* Map  */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6487.247955388441!2d-97.505245!3d35.612341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21fe06ff4cba9%3A0xb1c22ff369bbc824!2s401%20NE%20139th%20St%20Suite%2017%2C%20Edmond%2C%20OK%2073013%2C%20USA!5e0!3m2!1sen!2sin!4v1708070928987!5m2!1sen!2sin"
          height="418"
          allowfullscreen=""
          loading="lazy"
          className="w-full border-none"
        ></iframe>
      </div>

      {/* Privacy  */}
      <div className="bg-black-400">
        <div className="max-w-xxl w-full px-3 m-auto py-6 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 text-black-700 font-normal font-raleway-Regular text-xs sm:text-sm">
          <div>
            © Goodman Consulting. All Rights Reserved.
            <Link
              href="/sitemap"
              className="text-white dark-gray ml-1 hover:text-white transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
          <div>
            Designed and Maintained by
            <Link
              href="/https://moderninfluence.com/"
              target="_blank"
              className="text-white ml-1"
            >
              Modern Influence
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
