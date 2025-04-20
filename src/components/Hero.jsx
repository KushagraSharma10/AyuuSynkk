import React from "react";

const Hero = () => {
  return (
    <div className="w-full px-4  py-10 h-[109.91vw]  lg:h-[53.9vw] md:h-[65vw] lg:bg-black bg-black relative">
      <h1 className="lg:absolute md:absolute md:top-[18vw] md:left-[6vw] md:leading-[8vw] md:font-medium lg:top-[18vw] md:w-[72vw] lg:w-[35.5vw] lg:left-[7vw] lg:bg-transparent lg:text-[2.9em] md:text-[3em] text-[1.8em] text-white font-medium z-2">
        Experience the future of precision monitoring with{" "}
        <span className="text-[rgb(50,113,195)]">AyuSynk</span>
      </h1>
      <div className="video-content absolute w-full md:h-[65vw]  md:top-[0vw] lg:h-screen lg:top-0 bottom-0 right-0">
        <video
          className="w-full h-[30vh] md:h-full lg:h-full object-cover"
          muted
          autoPlay
          loop
          src="https://ayusynk.ai/wp-content/uploads/2024/07/home-page.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
