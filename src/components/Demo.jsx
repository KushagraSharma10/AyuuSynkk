import React from "react";

const Demo = () => {
  return (
    <div className="relative w-full px-4 lg:px-[5vw] lg:py-10 py-15 bg-black">
      <div>
        <img
          className="absolute top-10 right-1 lg:top-15 lg:right-[2vw]"
          src="https://www.ayusynk.ai/wp-content/uploads/2024/07/ellipse1-1.png"
          alt=""
        />
        <img
          className="absolute top-18 right-1 lg:top-33 lg:right-[8vw]"
          src="https://www.ayusynk.ai/wp-content/uploads/2024/07/ellipse2-1.png"
          alt=""
        />
        <img
          className="absolute top-25 right-1 lg:top-47  lg:right-[12vw]"
          src="https://www.ayusynk.ai/wp-content/uploads/2024/07/ellipse3-1.png"
          alt=""
        />
        <img
          className="absolute top-[-6vw] align-middle right-[1vw] lg:right-[38vw] lg:w-[20vw] w-[60vw] lg:top-28 "
          src="https://www.ayusynk.ai/wp-content/uploads/2024/07/t-logo-shape.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-10 lg:gap-5 lg:mt-[-1.5vw] mt-3 items-center justify-center ">
        <div className="flex flex-col items-center justify-center ">
          <img
            src="https://www.ayusynk.ai/wp-content/uploads/2024/07/t-logo.png"
            alt=""
          />
          <h2 className="lg:text-[2.2em] md:text-[2.2em] lg:font-medium text-[#E0E0E0]">
            Get in touch with us today!
          </h2>
        </div>
        <div className="getBook mx-auto text-white flex items-center gap-2">
          <a
            className="px-5 text-md lg:text-[1.2em] lg:font-medium  py-3 bg-[#5385C5] rounded-full"
            href=""
          >
            Contact Us
          </a>
          <a
            className="px-5 py-3 lg:text-[1.2em] lg:font-medium text-md bg-transparent border rounded-full active:bg-[#5385C5] transition ease-in-out 3s"
            href="#"
          >
            Book a Demo
          </a>
        </div>
      </div>
      <div className="p-5 py-20 lg:py-13 bg-[#141414] mt-10 lg:pl-20 rounded-[8vw] lg:gap-20 border-r-2 lg:flex lg:items-center  border-[#585858]">
        <h1 className="text-white text-center mb-8 font-semibold lg:mb-0">
          We are proudly supported by
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-y-20  lg:mt-0 mt-15 lg:gap-21 gap-x-8">
          <div className="w-[45%] flex justify-center">
            <img
              className="w-[70%] lg:w-[110%] max-w-[200px]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/08/Group-5.png"
              alt=""
            />
          </div>

          <div className="w-[45%] flex justify-center">
            <img
              className="w-[70%] lg:w-[110%] max-w-[200px]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/07/renc-1.png"
              alt=""
            />
          </div>

          {/* Doosri Row (2 items) */}
          <div className="w-[45%]  flex justify-center">
            <img
              className="w-[70%] lg:w-[110%] max-w-[200px]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/07/renc-1.png"
              alt=""
            />
          </div>

          <div className="w-[45%] flex justify-center">
            <img
              className="w-[50%] lg:w-[60%] max-w-[150px]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/07/sine-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
