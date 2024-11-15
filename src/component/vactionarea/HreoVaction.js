import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import necessary modules
import 'swiper/swiper-bundle.css';  // Import Swiper styles
import "react-datepicker/dist/react-datepicker.css";
import imagepath1 from './imagesone/Rectangle 31.png';
import imagepath2 from './imagesone/Rectangle 32.png';
import imagepath3 from './imagesone/Rectangle 33.png';
import imagepath4 from './imagesone/Rectangle 34.png';
import './vactionarea.css';

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
      img: imagepath4,
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
        img: imagepath4,
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
      img: imagepath4,
    },
  ]

const HeroVaction = () => {
    return (
        <div className="px-[24px] sm:px-0">
        <div className='flex flex-col justify-start items-start pt-[110px] sm:pt-[140px] md:pt-[160px] lg:pt-[190px] xl:pt-[230px] 2xl:pt-[260px]'>
            <p className='Forget-Hotelsjson text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60.34px] 2xl:text-[67.34px]  relative lg:leading-[70px] xl:leading-[80.82px]'>It’s time to ask yourself <br /> the big questions.
            <svg className='hidden sm:block mt-[3px] absolute left-[70%] sm:left-[8%] md:left-[9%] lg:left-[11%] xl:left-[25%] 2xl:left-[25%] w-[100px] sm:w-[250px] md:w-[280px] lg:w-[310px] xl:w-[340px] 2xl:w-[371px]' xmlns="http://www.w3.org/2000/svg" width="371" height="11" viewBox="0 0 371 11" fill="none">
  <path d="M358.356 6.40796C356.844 6.35176 355.332 6.2993 353.82 6.25433C340.076 5.84778 325.939 5.71662 311.485 5.66417C297.03 5.61171 281.956 5.66417 266.02 5.68291C243.597 5.60609 218.378 6.24497 196.469 6.80703C222.747 6.30679 249.675 5.87026 276.362 5.76534C289.548 5.71437 302.748 5.76442 315.885 5.91522C328.583 6.06606 341.154 6.35189 353.457 6.76956C347.989 7.16094 341.763 7.36043 335.449 7.34661C319.159 7.10879 302.754 7.01362 286.356 7.06183C286.356 6.89321 286.114 6.56159 286.038 6.39485C262.799 6.81265 240.105 6.95691 217.229 7.27729C211.529 7.35223 205.828 7.46464 200.113 7.55832C194.398 7.65199 188.713 7.79437 183.028 7.95737C180.185 8.03606 177.343 8.1185 174.516 8.2103C171.688 8.30211 168.861 8.39765 166.033 8.51194L157.082 8.86229L147.663 9.25199C149.659 9.29508 148.782 9.45621 148.57 9.57237C151.775 9.48806 154.936 9.38501 158.096 9.28759L167.061 9.00656L175.438 8.74426L183.784 8.50633C189.333 8.3452 194.897 8.21592 200.416 8.07915C205.934 7.94239 211.513 7.83185 217.047 7.7288C239.348 7.30269 261.872 7.08163 284.436 7.06744C248.995 7.18547 214.008 7.88993 179.263 8.91475C174.909 9.03841 170.584 9.18266 166.23 9.31568L159.169 9.53114C156.704 9.60234 154.24 9.6829 151.76 9.74847C141.857 10.0201 131.878 10.2375 121.869 10.4173C111.859 10.5972 101.85 10.719 91.8561 10.807C81.862 10.8951 71.883 10.9494 61.9644 10.9738L48.4929 11C35.6348 10.5406 22.3059 10.3153 8.92463 10.3311C12.2056 9.48993 -0.903246 7.8 25.2841 8.14098C25.2841 7.97237 25.2841 7.63512 25.2841 7.46651C-0.842768 6.61967 -10.9125 4.26464 15.4865 3.5883C30.2887 3.25106 47.238 3.26418 64.5198 3.24919C68.8742 3.24919 73.1833 3.23606 77.5529 3.22857C81.9225 3.22108 86.2467 3.19673 90.5407 3.15551C99.016 3.09623 107.442 2.95655 115.745 2.7377C121.642 2.59719 127.463 2.43607 133.224 2.26558C136.081 2.17378 138.984 2.09883 141.796 1.99953L150.611 1.7185C163.786 1.28596 177.212 0.981528 190.769 0.807966C209.548 0.609372 229.007 0.305863 248.662 0.133498C268.318 -0.0388669 288.11 -0.0782167 306.994 0.221549C310.91 0.254323 314.837 0.25933 318.757 0.23654C323.051 0.23654 327.557 0.208433 331.851 0.197192C340.454 0.197192 348.226 0.24403 351.507 0.536301C356.299 0.824826 356.224 1.18454 355.226 1.57611C333.276 1.32058 311.221 1.23174 289.183 1.31007C275.787 1.31007 262.376 1.34004 248.965 1.41124C235.554 1.48243 222.158 1.58924 208.747 1.71476C221.951 1.65856 235.251 1.58736 248.647 1.50118C262.043 1.42623 275.56 1.35129 289.183 1.31382C310.981 1.32346 332.749 1.51751 354.334 1.89461C353.321 2.23185 352.353 2.5822 353.442 2.92693L357.146 2.96066C359.202 2.97564 361.682 3.01687 363.285 3.0356C375.698 4.04544 370.981 5.16956 364.101 5.92834C362.332 6.07448 360.397 6.24122 358.356 6.40796Z" fill="#D1FAE5"/>
                    </svg>
            </p>
            {/* <div className="date-header1 mb-[50px] sm:mb-[70px] md:mb-[90px] lg:mb-[120px] xl:mb-[140px] 2xl:mb-[166px]">
                
            </div> */}
        </div>
        <div className="flex justify-center items-center relative bottom-[-30px] sm:bottom-[-40px] md:bottom-[-55px] lg:bottom-[-75px] xl:bottom-[-100px] 2xl:bottom-[-135px]">
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
        {/* Smaller Left Image  pb-[50px] sm:pb-[70px] md:pb-[90px] lg:pb-[110px] xl:bottom-[-230px] 2xl:bottom-[-150px] */}
        {reviews1.map((reviews1, index) => (
        <SwiperSlide id={index}>
          <div className="relative h-[300px] md:h-[350px] lg:h-[400px] xl:h-[420px] 2xl:h-[450px]" >
            <img 
              src={reviews1.img} 
              alt={reviews1.img}
              loading="lazy"
              className="w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px] object-cover  relative "
            />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    );
};

export default HeroVaction;