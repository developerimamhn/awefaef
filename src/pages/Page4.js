import React, { useState, useEffect } from "react";
import Slideronedoc from "./Slideronedoc";

const Page4 = () => {
  const slides = [
    { component: <Slideronedoc /> },
    { component: <Slideronedoc /> },
    { component: <Slideronedoc /> },
    { component: <Slideronedoc /> },
    { component: <Slideronedoc /> },
    { component: <Slideronedoc /> },
    { component: <Slideronedoc /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-full mx-auto bg-black pb-[90px] sm:pb-[110px] md:pb-[130px] lg:pb-[150px] xl:pb-[170px] 2xl:pb-[190px]">
       <div className="flex gap-[20px] justify-center items-center py-[30px] sm:py[40px] md:py-[50px] lg:py-[60px] xl:py-[70px] 2xl:py-[80px]">
        <h2 className='usclothing text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px]'>UrbanStay</h2>
        <span className='usclothingone text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px]'>vs</span>
        <h2 className='usclothingone text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px]'>Hotels</h2>
        </div>
      <div className="overflow-hidden rounded-lg w-full">
        {/* Slide container with 100% width */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center"
              style={{ width: "100%" }}
            >
              <div className="">{slide.component}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      {/* <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        &#8592;
      </button> */}

      {/* Next Button */}
      {/* <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        &#8594;
      </button> */}

      {/* Dots for Navigation */}
      <div className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[50px] xl:bottom-[60px] 2xl:bottom-[69px] left-0 right-0 flex justify-center space-x-[5px]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-[9px] sm:w-[10px] md:w-[11px] lg:w-[12px] xl:w-[13px] 2xl:w-[14px] h-[9px] sm:h-[10px] md:h-[11px] lg:h-[12px] xl:h-[13px] 2xl:h-[14px] rounded-full ${currentIndex === index ? 'bg-[#D1FAE5]' : 'bg-[#d1fae54b]'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page4;
