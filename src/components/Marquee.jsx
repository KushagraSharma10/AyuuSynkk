import React from "react";

const Marquee = () => {
  const Images = [
    "https://www.ayusynk.ai/wp-content/uploads/2024/09/medongo.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/call-health.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/apollo.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/blossom.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/medtel.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/yolohealth.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/curebay.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/09/medongo.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/call-health.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/apollo.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/blossom.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/medtel.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/yolohealth.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/curebay.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/09/medongo.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/call-health.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/apollo.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/blossom.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/medtel.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/yolohealth.svg",
    "https://www.ayusynk.ai/wp-content/uploads/2024/07/curebay.svg",
  ];

  return (
    <div className="w-full p-4 py-10 overflow-hidden bg-[#1367D5]">
      <h1 className="text-[1.6em] text-center text-white">
        Trusted by health care partners
      </h1>
      <div className="marquee flex items-center gap-[1vw] w-[500vw] lg:w-[100vw] mt-5 animate-marquee">
        <div className="flex items-center gap-[2vw]">
            {Images.map((img, index)=>{
                return(
                    <img
                    key={index}
                    className="min-w-[150px] lg:min-w-[200px] h-auto"
                    src={img}
                    alt=""
                />
                )
            })}
        </div>
       
      </div>
    </div>
  );
};

export default Marquee;
