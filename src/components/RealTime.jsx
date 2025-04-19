import React from "react";

const RealTime = () => {
  return (
    <div className="bg-[#EAEAEA] px-3 py-11 lg:px-[5vw]">
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
      <hr className="text-[#BEBEBE] mt-5" />
      <div className="scroll-main lg:mt-10 lg:flex lg:gap-5">
        <div className="left hidden lg:block  lg:w-[35vw] bg-red-400 lg:h-[70vh] lg:overflow-y-auto lg:p-1 ">
            <div className="list w-full flex lg:mt-2 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
                <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
            </div>
            <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
                <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
            </div>
            <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
                <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
            </div>
            <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
                <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
            </div>
            <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
                <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
            </div>
            <div className="list w-full flex lg:mt-5 items-center justify-center border border-[#D6D6D6] rounded-[2vw] bg-transparent h-[19vh]">
                <h1 className="text-[2em] font-medium text-[#606060] " >Advance Technology </h1>
            </div>
            

        </div>
        <div className="right">

        </div>
        <div className="lg:hidden scrollable mt-5  overflow-y-auto flex flex-col gap-5 section w-full h-[40vh]   py-2">
          <div className="elem p-4 py-8 rounded-md bg-[#fff]">
            <img
              className="w-[12vw]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
              alt=""
            />
            <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
              Advance technology
            </h1>
            <p className="font-medium mt-3">
              Enabling IOT healthtech/medtech devices with the latest
              technology. Integrating 5G, bluetooth V5.3 for faster transfer of
              data even in remote areas
            </p>
          </div>
          <div className="elem p-4 rounded-md bg-[#fff]">
            <img
              className="w-[12vw]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
              alt=""
            />
            <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
              Advance technology
            </h1>
            <p className="font-medium mt-3">
              Enabling IOT healthtech/medtech devices with the latest
              technology. Integrating 5G, bluetooth V5.3 for faster transfer of
              data even in remote areas
            </p>
          </div>
          <div className="elem p-4 rounded-md bg-[#fff]">
            <img
              className="w-[12vw]"
              src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png"
              alt=""
            />
            <h1 className="text-[2em] font-medium mt-4 text-[#606060]">
              Advance technology
            </h1>
            <p className="font-medium mt-3">
              Enabling IOT healthtech/medtech devices with the latest
              technology. Integrating 5G, bluetooth V5.3 for faster transfer of
              data even in remote areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTime;

// import React, { useState } from 'react';

// const RealTime = () => {
//   // State to track active content
//   const [activeContent, setActiveContent] = useState(0);

//   // Data for headings and content
//   const contentData = [
//     {
//       title: "Advance technology",
//       img: "https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png",
//       desc: "Enabling IOT healthtech/medtech devices with the latest technology. Integrating 5G, bluetooth V5.3 for faster transfer of data even in remote areas"
//     },
//     {
//       title: "Feature 2",
//       img: "https://example.com/image2.png",
//       desc: "Description for Feature 2..."
//     },
//     {
//       title: "Feature 3",
//       img: "https://example.com/image3.png",
//       desc: "Description for Feature 3..."
//     },
//     {
//         title: "Feature 3",
//         img: "https://example.com/image3.png",
//         desc: "Description for Feature 3..."
//       },
//       {
//         title: "Feature 3",
//         img: "https://example.com/image3.png",
//         desc: "Description for Feature 3..."
//       },
//   ];

//   return (
//     <div className='bg-[#EAEAEA] px-3 py-11 lg:px-[5vw]'>
//       <div className='Text-Area lg:flex lg:items-center lg:gap-[15vw]'>
//         <h1 className='text-[1.55em] lg:text-[2.4em] font-bold leading-8 lg:w-[30vw] lg:leading-13'>
//           Real-Time monitoring for enhanced diagnostics.
//         </h1>
//         <p className='font-medium pt-2 leading-[6vw] lg:leading-[1.5vw] lg:w-[40vw] lg:text-[1.1em]'>
//           The unified ayu dashboard ecosystem provides access to real-time monitoring data...
//         </p>
//       </div>
//       <hr className='text-[#BEBEBE] mt-5' />

//       {/* Main Content Area (Split Layout) */}
//       <div className='mt-5 lg:flex lg:gap-5'>
//         {/* Left Side (Headings - Laptop Only) */}
//         <div className='hidden lg:block lg:w-[30%] lg:overflow-y-auto lg:h-[60vh] lg:pr-4'>
//           {contentData.map((item, index) => (
//             <div
//               key={index}
//               className={`p-4 mb-3 rounded-md cursor-pointer ${activeContent === index ? 'bg-white' : 'bg-gray-100'}`}
//               onClick={() => setActiveContent(index)}
//             >
//               <h2 className='text-[1.5em] font-medium'>{item.title}</h2>
//             </div>
//           ))}
//         </div>

//         {/* Right Side (Content - Mobile + Laptop) */}
//         <div className='lg:w-[70%]'>
//           {/* Mobile View: Show ALL content stacked */}
//           <div className='lg:hidden space-y-5'>
//             {contentData.map((item, index) => (
//               <div key={index} className='p-4 py-8 rounded-md bg-white'>
//                 <img className='w-[12vw]' src={item.img} alt="" />
//                 <h1 className='text-[2em] font-medium mt-4 text-[#606060]'>{item.title}</h1>
//                 <p className='font-medium mt-3'>{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Laptop View: Show ONLY active content */}
//           <div className='hidden lg:block bg-white p-6 rounded-md'>
//             <img className='w-[8vw]' src={contentData[activeContent].img} alt="" />
//             <h1 className='text-[2em] font-medium mt-4 text-[#606060]'>
//               {contentData[activeContent].title}
//             </h1>
//             <p className='font-medium mt-3'>{contentData[activeContent].desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealTime;
