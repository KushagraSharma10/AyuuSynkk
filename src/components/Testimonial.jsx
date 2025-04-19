// import React, { useEffect, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Optional arrows
// import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

// const Testimonial = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Testimonial Data (Images/Content)
//   const slides = [
//     {
//       id: 1,
//       title: "Slide 1",
//       content: "Ye pehla slide hai!",
//       bgColor: "bg-blue-200",
//     },
//     {
//       id: 2,
//       title: "Slide 2",
//       content: "Ye doosra slide hai!",
//       bgColor: "bg-green-200",
//     },
//     {
//       id: 3,
//       title: "Slide 3",
//       content: "Ye teesra slide hai!",
//       bgColor: "bg-red-200",
//     },
//   ];

//   // Next Slide Function
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   // Previous Slide Function
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   // Go to Specific Slide
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // 3 sec mein auto-slide

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handleDragEnd = (event, info) => {
//     if (info.offset.x > 50) {
//       // Swipe right -> previous
//       setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     } else if (info.offset.x < -50) {
//       // Swipe left -> next
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }
//   };

//   return (
//     <div className="w-full py-10  bg-[#EAEAEA]">
//       <div className="card w-[90vw] h-[80vh] px-5 py-15 mx-auto rounded-md bg-[#F2F2F2] flex flex-col items-center  gap-3">
//         <h1 className="text-[1.3em] font-semibold">Testimonial</h1>
//         <p className="text-[1em] font-medium  text-center">
//           “AyuSynk has solved a major hurdle in my practice, stethoscope use for
//           hearing impaired medical practitioners. My patients use hearing aids
//           or cochlear implants. Some of them are medical student, medical
//           practitioner or nurse. They are happy to use AyuSynk stethoscope.
//           AyuSynk are not only cheaper than the imported Bluetooth stethoscopes,
//           they are much better as we can record, share and replay the sounds.
//           This is very important for people with hearing impairment. Beat part
//           is the prompt and efficient customer services and technical support
//           team. I am very proud of this ‘made in India’ gadget that is
//           undoubtedly a better alternative to products from global giants like
//           3M and Littmann”
//         </p>
//         <div className="text-center mt-3">
//           <p>Dr. Chandan Saha</p>
//           <p>Speech Therapist, Kolkata</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";

// const testimonials = [
//   {
//     id: 1,
//     name: "Dr. Chandan Saha",
//     role: "Speech Therapist, Kolkata",
//     content:
//       "AyuSynk has solved a major hurdle in my practice, stethoscope use for hearing impaired medical practitioners...",
//   },
//   {
//     id: 2,
//     name: "Dr. Priya Sharma",
//     role: "Cardiologist, Delhi",
//     content:
//       "The AyuSynk stethoscope has revolutionized how I examine my patients...",
//   },
//   {
//     id: 3,
//     name: "Dr. Rajesh Patel",
//     role: "Pediatrician, Mumbai",
//     content:
//       "As a pediatrician, I often deal with anxious parents. With AyuSynk...",
//   },
//   {
//     id: 4,
//     name: "Dr. Ananya Gupta",
//     role: "Pulmonologist, Bangalore",
//     content:
//       "The noise cancellation feature in AyuSynk is a game-changer for busy hospital environments...",
//   },
//   {
//     id: 5,
//     name: "Dr. Vikram Singh",
//     role: "Medical Professor, Chennai",
//     content:
//       "I've incorporated AyuSynk into my medical teaching curriculum...",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="w-full py-10 bg-[#EAEAEA] flex justify-center">
//       <div className="w-[390vw] overflow-hidden">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: true,
//           }}
//           speed={700}
//           pagination={{ clickable: true }}
//         >
//           {testimonials.map((t) => (
//             <SwiperSlide key={t.id}>
//               <div className="flex justify-center bg-red-400 items-center h-[70vh]">
//                 <div className="w-[80%] h-full p-6 bg-white rounded-xl flex flex-col justify-center items-center gap-4 transition-all">
//                   <h2 className="text-xl font-bold text-center">Testimonial</h2>
//                   <p className="text-center text-gray-700">"{t.content}"</p>
//                   <div className="text-center mt-4">
//                     <p className="font-semibold">{t.name}</p>
//                     <p className="text-sm text-gray-500">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Dr. Chandan Saha",
    role: "Speech Therapist, Kolkata",
    content:
      "AyuSynk has solved a major hurdle in my practice, stethoscope use for hearing impaired medical practitioners. My patients use hearing aids or cochlear implants. Some of them are medical student, medical practitioner or nurse. They are happy to use AyuSynk stethoscope. AyuSynk are not only cheaper than the imported Bluetooth stethoscopes, they are much better as we can record, share and replay the sounds. This is very important for people with hearing impairment. Beat part is the prompt and efficient customer services and technical support team. I am very proud of this 'made in India' gadget that is undoubtedly a better alternative to products from global giants like 3M and Littmann",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Cardiologist, Delhi",
    content:
      "The AyuSynk stethoscope has revolutionized how I examine my patients. The sound clarity is exceptional and the ability to record and share auscultations with colleagues has improved our diagnostic accuracy significantly.",
  },
  {
    id: 3,
    name: "Dr. Rajesh Patel",
    role: "Pediatrician, Mumbai",
    content:
      "As a pediatrician, I often deal with anxious parents. With AyuSynk, I can now show them exactly what I'm hearing in their child's chest. This visual confirmation has dramatically improved parent-doctor trust in my practice.",
  },
  {
    id: 4,
    name: "Dr. Ananya Gupta",
    role: "Pulmonologist, Bangalore",
    content:
      "The noise cancellation feature in AyuSynk is a game-changer for busy hospital environments. I can now hear subtle lung sounds clearly even in noisy wards. The battery life is impressive too - lasts through my entire shift.",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    role: "Medical Professor, Chennai",
    content:
      "I've incorporated AyuSynk into my medical teaching curriculum. Students can now hear what I hear during demonstrations, and we can save interesting cases for future reference. It's transformed how I teach auscultation.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full lg:px-[5vw] overflow-hidden py-10 bg-[#EAEAEA]">
      <div className="w-[90vw] lg:w-[120vw] lg:p-2 lg:px-5 lg: bg-red-300 lg:mx-[-5vw] mx-auto   overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          speed={700}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="w-full lg:w-[96vw] flex-shrink-0 px-2">
                <div className="h-[80vh] lg:h-[70vh] px-5 py-10 rounded-md lg:rounded-[3vw] bg-[#F2F2F2] flex flex-col items-center gap-3">
                  <h1 className="text-[1.3em] font-semibold">Testimonial</h1>
                  <p className="text-[1em] font-medium text-center">
                    "{testimonial.content}"
                  </p>
                  <div className="text-center mt-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                 
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots Pagination (Visible only on laptop) */}
        <div className="hidden lg:flex justify-center mt-6 space-x-2 swiper-custom-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonial;
