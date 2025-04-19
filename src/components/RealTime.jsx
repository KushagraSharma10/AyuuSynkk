// import React from "react";

// const RealTime = () => {

//     // const handleClick = () =>{
//     //     const list = document.querySelector('.list');

//     //         list.style.backgroundColor = "#3271C3";
//     //         list.style.color = "white";
//     // }

//     const [activeContent, setActiveContent] = useState(0);

//   return (
//     <div className="bg-[#EAEAEA] px-3 py-11 lg:px-[5vw]">
//       <div className="Text-Area lg:flex lg:items-center lg:gap-[15vw]">
//         <h1 className="text-[1.55em] lg:text-[2.4em] font-bold leading-8 lg:w-[30vw] lg:leading-13">
//           Real-Time monitoring for enhanced diagnostics.
//         </h1>
//         <p className="font-medium pt-2 leading-[6vw] lg:leading-[1.5vw] lg:w-[40vw] lg:text-[1.1em]">
//           The unified ayu dashboard ecosystem provides access to real-time
//           monitoring data. The technology is designed to provide with dedicated
//           filter for clarity, precision and accuracy. AyuSynk features one tap
//           connectivity with smartphones using bluetooth technology, guided
//           capturing of physiological signals and web streaming of vital signs.
//         </p>
//       </div>
//       <hr className="text-[#BEBEBE] mt-5" />
//       <div className="scroll-main lg:mt-10 lg:flex lg:justify-between">

//         <div className="left hidden lg:block  lg:w-[35vw] bg-transparent hover:overflow-auto lg:h-[70vh] overflow-y-hidden lg:p-1 ">
//             <div className="list w-full flex lg:mt-2 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh] "
//             >
//                 <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
//             </div>
//             <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
//                 <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
//             </div>
//             <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
//                 <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
//             </div>
//             <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
//                 <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
//             </div>
//             <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
//                 <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
//             </div>
//             <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
//                 <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
//             </div>

//         </div>

//         <div className="right hidden  w-[45vw] p-10 lg:flex lg:flex-col justify-center  items-start bg-transparent ">
//         <img
//               className="w-[7vw]"
//               src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
//               alt=""
//             />
//             <h1 className="text-[3em] font-medium mt-4 text-[#606060]">
//               Advance technology
//             </h1>
//             <p className="text-[1.1em] font-medium mt-3">
//               Enabling IOT healthtech/medtech devices with the latest
//               technology. Integrating 5G, bluetooth V5.3 for faster transfer of
//               data even in remote areas
//             </p>
//         </div>

//         <div className="lg:hidden scrollable mt-5  overflow-y-auto flex flex-col gap-5 section w-full h-[40vh] py-2">
//           <div className="elem p-4 py-8 rounded-md bg-[#fff]">
//             <img
//               className="w-[12vw]"
//               src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
//               alt=""
//             />
//             <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
//               Advance technology
//             </h1>
//             <p className="font-medium mt-3">
//               Enabling IOT healthtech/medtech devices with the latest
//               technology. Integrating 5G, bluetooth V5.3 for faster transfer of
//               data even in remote areas
//             </p>
//           </div>
//           <div className="elem p-4 rounded-md bg-[#fff]">
//             <img
//               className="w-[12vw]"
//               src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
//               alt=""
//             />
//             <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
//               Advance technology
//             </h1>
//             <p className="font-medium mt-3">
//               Enabling IOT healthtech/medtech devices with the latest
//               technology. Integrating 5G, bluetooth V5.3 for faster transfer of
//               data even in remote areas
//             </p>
//           </div>
//           <div className="elem p-4 rounded-md bg-[#fff]">
//             <img
//               className="w-[12vw]"
//               src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
//               alt=""
//             />
//             <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
//               Advance technology
//             </h1>
//             <p className="font-medium mt-3">
//               Enabling IOT healthtech/medtech devices with the latest
//               technology. Integrating 5G, bluetooth V5.3 for faster transfer of
//               data even in remote areas
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealTime;
import React, { useState } from "react";

const RealTime = () => {
  const [activeContent, setActiveContent] = useState(0);

  // Data for all content (headings + details)
  const contentData = [
    {
      title: "Advance Technology",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png",
      desc: "Enabling IOT healthtech/medtech devices with the latest technology. Integrating 5G, bluetooth V5.3 for faster transfer of data even in remote areas",
    },
    {
      title: "Dedicated filters",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time-1.png",
      desc: "Specialized filters for detecting various physiological body signs and signals",
    },
    {
      title: "Live visualization",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time-2.png",
      desc: "Real-time visualization during screening with advanced technology.",
    },
    {
      title: "Real-time sharing",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time-3.png",
      desc: "Real-time sharing with specialized medical professionals for precise diagnosis.",
    },
    {
      title: "Guided recording",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time-4.png",
      desc: "On-screen guided recording for various physiological positions",
    },
    {
      title: "Remote monitoring",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time-6.png",
      desc: "Live telemedicine consultations from anywhere.",
    },
    {
      title: "One-Tap connectivity",
      img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time-7.png",
      desc: "Seamless smartphone connectivity to AyuSynk via bluetooth with a single tap.",
    },
  ];

  return (
    <div className="bg-[#EAEAEA] px-3 py-20 lg:px-[5vw]">
      <div className="Text-Area lg:flex lg:items-center lg:gap-[15vw]">
        <h1 className="text-[1.55em] lg:text-[2.4em] font-bold leading-8 lg:w-[30vw] lg:leading-13">
          Real-Time monitoring for enhanced diagnostics.
        </h1>
        <p className="font-medium pt-2 leading-[6vw] lg:leading-[1.5vw] lg:w-[40vw] lg:text-[1.1em]">
          The unified ayu dashboard ecosystem provides access to real-time
          monitoring data. The technology is designed to provide with dedicated
          filter for clarity, precision and accuracy. AyuSynk features one tap
          connectivity with smartphones using bluetooth technology, guided
          capturing of physiological signals and web streaming of vital signs.
        </p>
      </div>
      <hr className="text-[#BEBEBE] mt-10" />
      <div className="scroll-main lg:mt-10 lg:flex lg:justify-between">
        
        {/* LEFT SIDE (HEADINGS - LAPTOP ONLY) */}
        <div className="left hidden lg:block lg:w-[35vw] bg-transparent lg:h-[60vh] overflow-y-auto lg:p-1 scrollbar-hide">
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`list w-full flex ${
                index === 0 ? "lg:mt-2" : "lg:mt-5"
              } items-center justify-center border border-[#D6D6D6] rounded-[2vw] ${
                activeContent === index
                  ? "bg-[#3271C3] text-white"
                  : "bg-transparent text-[#606060]"
              } h-[15vh] cursor-pointer`}
              onClick={() => setActiveContent(index)}
            >
              <h1 className="text-[2.4em] font-medium">{item.title}</h1>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (CONTENT - LAPTOP ONLY) */}
        <div className="right hidden w-[45vw] p-10 lg:flex lg:flex-col justify-center items-start bg-transparent">
          <div
            key={activeContent}
            className="transition-opacity duration-300 animate-fadeIn"
          >
            <img
              className="w-[7vw]"
              src={contentData[activeContent].img}
              alt=""
            />
            <h1 className="text-[3em] font-medium mt-4 text-[#606060]">
              {contentData[activeContent].title}
            </h1>
            <p className="text-[1.1em] font-medium mt-3">
              {contentData[activeContent].desc}
            </p>
          </div>
        </div>

        {/* MOBILE VIEW (ALL CONTENT STACKED) */}
        <div className="lg:hidden scrollable mt-5 overflow-y-auto flex flex-col gap-5 section w-full h-[40vh] py-2">
          {contentData.map((item, index) => (
            <div key={index} className="elem p-4 py-8 rounded-md bg-[#fff]">
              <img className="w-[12vw]" src={item.img} alt="" />
              <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
                {item.title}
              </h1>
              <p className="font-medium mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealTime;
