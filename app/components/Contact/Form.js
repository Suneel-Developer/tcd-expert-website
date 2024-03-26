"use client";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const Form = () => {
  return (
    <section className="w-full max-w-xxl px-3 py-10 mx-auto">
      <div className="w-full max-w-2xl m-auto text-center">
        <h1 className="text-dark-gray leading-[1.5em] text-2xl md:text-3xl font-raleway-Bold font-bold mb-5">
          OKLAHOMA AND SURROUNDING STATES
        </h1>
        <p className="text-dark-gray leading-[34px] text-lg md:text-xl font-raleway-Regular font-normal mb-5">
          Roofing & Construction Defect Experts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        {/* Form  */}
        <div>
          <p className="text-black-700 font-normal font-raleway-Regular text-sm tracking-[1px] mb-10">
            We promise never to share your information.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 base:grid-cols-3 gap-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="flex-1 border border-gray-300 bg-transparent rounded h-12 p-3 outline-none font-raleway-Medium font-medium text-sm text-black-700 placeholder:text-gray-300 tracking-[1px]"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="flex-1 border border-gray-300 bg-transparent rounded h-12 p-3 outline-none font-raleway-Medium font-medium text-sm text-black-700 placeholder:text-gray-300 tracking-[1px]"
              />
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 bg-transparent rounded h-12 p-3 outline-none font-raleway-Medium font-medium text-sm text-black-700 placeholder:text-gray-300 tracking-[1px]"
              />
            </div>
            <textarea
              placeholder="What would you like us to know?"
              id="message"
              name="message"
              className="w-full resize-none border border-gray-300 bg-transparent rounded h-40 p-3 outline-none font-raleway-Medium font-medium text-sm text-black-700 placeholder:text-gray-300 tracking-[1px]"
              required
            ></textarea>
            {/* Recaptcha  */}
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
            {/* Submit Button  */}
            <input
              type="submit"
              value="Submit"
              className="w-full xs:w-fit bg-transparent border-2 cursor-pointer border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white h-12 rounded px-4 sm:px-6 font-bold font-raleway-Bold text-sm uppercase tracking-[2.5px] transition-colors duration-200"
            />
          </form>
        </div>

        {/* Map  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.617464208066!2d-97.50915222450344!3d35.612501633747016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21ebeefaefcb7%3A0x376e28660549d3cd!2s401%20NE%20139th%20St%2C%20Edmond%2C%20OK%2073013%2C%20USA!5e0!3m2!1sen!2s!4v1708090261907!5m2!1sen!2s"
              loading="lazy"
              className="w-full h-64"
            ></iframe>
          </div>

          <div className="flex flex-col">
            <h2 className="text-dark-gray font-bold font-raleway-Bold sm:text-lg uppercase tracking-[2px] leading-[20px] mb-5">
              OUR OFFICE
            </h2>
            <strong className="text-black-700 font-semibold font-raleway-SemiBold text-sm leading-[26px]">
              Goodman Consulting
            </strong>
            <Link
              href="https://www.google.com/maps/place/401+NE+139th+St+%2317,+Edmond,+OK+73013/@35.6120397,-97.5095499,17z/data=!3m1!4b1!4m5!3m4!1s0x87b21ebe95b6d6af:0x9a8bd35420e10a0e!8m2!3d35.6120354!4d-97.5073612"
              className="max-w-[125px] text-sky-blue text-sm leading-[26px] font-normal font-raleway-Regular"
            >
              401 NE 139th Street Suite 17 Edmond, OK 73013
            </Link>
            <Link
              href="tel:405-474-2828"
              className="text-sky-blue text-sm mt-1 leading-[26px] font-normal font-raleway-Regular"
            >
              Phone: 405.474.2828
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
