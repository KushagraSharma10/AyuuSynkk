import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Optional arrows

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonial Data (Images/Content)
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      content: "Ye pehla slide hai!",
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      title: "Slide 2",
      content: "Ye doosra slide hai!",
      bgColor: "bg-green-200",
    },
    {
      id: 3,
      title: "Slide 3",
      content: "Ye teesra slide hai!",
      bgColor: "bg-red-200",
    },
  ];

  // Next Slide Function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Previous Slide Function
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to Specific Slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 sec mein auto-slide
  
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 50) {
      prevSlide(); // Swipe right -> go previous
    } else if (info.offset.x < -50) {
      nextSlide(); // Swipe left -> go next
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Touch-Scrollable Slides */}
      <motion.div
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ x: -currentSlide * 100 + "%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full flex-shrink-0 flex items-center justify-center h-64 ${slide.bgColor} p-6 select-none`}
          >
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="mt-2">{slide.content}</p>
          </div>
        ))}
      </motion.div>

      {/* Navigation Arrows (Optional) */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;