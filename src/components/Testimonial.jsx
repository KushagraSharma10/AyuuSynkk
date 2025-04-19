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

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Dr. Chandan Saha",
    role: "Speech Therapist, Kolkata",
    content: "AyuSynk has solved a major hurdle in my practice..."
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Cardiologist, Delhi",
    content: "The AyuSynk stethoscope has revolutionized how I examine..."
  },
  {
    id: 3,
    name: "Dr. Rajesh Patel",
    role: "Pediatrician, Mumbai",
    content: "As a pediatrician, I often deal with anxious parents..."
  },
  {
    id: 4,
    name: "Dr. Ananya Gupta",
    role: "Pulmonologist, Bangalore",
    content: "The noise cancellation feature in AyuSynk is a game-changer..."
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    role: "Medical Professor, Chennai",
    content: "I've incorporated AyuSynk into my medical teaching curriculum..."
  }
];

const Testimonial = () => {
  return (
    <div className="w-full py-10 bg-[#EAEAEA]">
      <div className="w-[90vw] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="h-[70vh] p-5 bg-white rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-semibold">Testimonial</h2>
                <p className="text-center text-gray-700 px-4">"{t.content}"</p>
                <div className="text-center mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
