import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import necessary modules
import 'swiper/swiper-bundle.css';  // Import Swiper styles
import imagepath1 from './slideronedocimages/Rectangle 9.png';
import imagepath2 from './slideronedocimages/Rectangle 11.png';
import imagepath3 from './slideronedocimages/Rectangle 15.png';


const reviews1 = [
  {
    img: imagepath1,  // Replace with actual image path
  },
  {
    img: imagepath2,  // Replace with actual image path
  },
  {
    img: imagepath3,  // Replace with actual image path
  },
  {
    img: imagepath1,  // Replace with actual image path
  },
  {
    img: imagepath2,  // Replace with actual image path
  },
  {
    img: imagepath3,  // Replace with actual image path
  },
  {
    img: imagepath1,  // Replace with actual image path
  },
  {
    img: imagepath2,  // Replace with actual image path
  },
  {
    img: imagepath3,  // Replace with actual image path
  },
]

const ImageSlider = () => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        slidesPerView={3}  // Shows 3 full images
        spaceBetween={20}  // Space between slides
        centeredSlides={true} 
        loop={true}  // Infinite loop
        autoplay={{
          delay: 1000,  // 3 seconds delay for autoplay
          disableOnInteraction: false,  // Keeps autoplay even after user interaction
        }}
        modules={[Autoplay]}  // Swiper modules
        className="w-full "
        breakpoints={{
          40: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        
      >
        {/* Smaller Left Image */}
        {reviews1.map((reviews1, index) => (
        <SwiperSlide id={index}>
          <div className="relative overflow-hidden pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[35px] xl:pt-[40px] 2xl:pt-[47px] pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[130px] 2xl:pb-[150px]" >
            <img 
              src={reviews1.img} 
              alt={reviews1.img}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
