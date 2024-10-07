import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './page5.css'
import path_to_image1 from './image5/Ellipse 14.png';
import path_to_image2 from './image5/Ellipse 14-1.png';
import path_to_image3 from './image5/Ellipse 14-2.png';

const reviews = [
  {
    name: "Shawna",
    date: "April 2022",
    review: "Urbanstay is so friendly and bubbly!  Energy is so positive and warm. I really enjoyed my reading with Urbanstay and she gave me amazing insight and confidence.",
    img: path_to_image1,  // Replace with actual image path
  },
  {
    name: "Davina",
    date: "April 2022",
    review: "My experience with Urbanstay was amazing! She has such an amazing personality and very easy to talk to. My reading with her was very accurate which helped me close a chapter.",
    img: path_to_image2,  // Replace with actual image path
  },
  {
    name: "Neha",
    date: "April 2022",
    review: "This experience with Urbanstay is wonderful. It is full of positive vibes and good energy! She’s very friendly, accurate and honest! Must try experience, and you’ll definitely land up",
    img: path_to_image3,  // Replace with actual image path
  },
  {
    name: "Shawna",
    date: "April 2022",
    review: "Urbanstay is so friendly and bubbly!  Energy is so positive and warm. I really enjoyed my reading with Urbanstay and she gave me amazing insight and confidence.",
    img: path_to_image1,  // Replace with actual image path
  },
  {
    name: "Davina",
    date: "April 2022",
    review: "My experience with Urbanstay was amazing! She has such an amazing personality and very easy to talk to. My reading with her was very accurate which helped me close a chapter.",
    img: path_to_image2,  // Replace with actual image path
  },
  {
    name: "Neha",
    date: "April 2022",
    review: "This experience with Urbanstay is wonderful. It is full of positive vibes and good energy! She’s very friendly, accurate and honest! Must try experience, and you’ll definitely land up",
    img: path_to_image3,  // Replace with actual image path
  },
];

const Page5 = () => {
    return (
        <div className="bg-[#000] ">
        <div className='container mx-auto relative pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[120px]'>
            <div className="flex justify-between items-center flex-col sm:flex-row mb-[15px] sm:mb-[32px] md:mb-[42px] lg:mb-[52px] xl:mb-[62px] 2xl:mb-[71px]">
                <h2 className='review_cardsone flex items-center flex-row'><span className='text-[#fff] great_revieone text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px] '>Guest Reviews</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='inline ml-[15px] md:ml-[18px] lg:ml-[22px] xl:ml-[25px] 2xr:ml-[29px] mr-[10px] sm:mr-[13px] lg:mr-[17px] 2xl:mr-[20px]' width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path d="M15.5489 1.42705C15.8483 0.505742 17.1517 0.50574 17.4511 1.42705L20.6535 11.2832C20.7874 11.6952 21.1713 11.9742 21.6046 11.9742H31.9679C32.9366 11.9742 33.3394 13.2138 32.5557 13.7832L24.1716 19.8746C23.8211 20.1293 23.6744 20.5806 23.8083 20.9926L27.0108 30.8488C27.3101 31.7701 26.2556 32.5362 25.4719 31.9668L17.0878 25.8754C16.7373 25.6207 16.2627 25.6207 15.9122 25.8754L7.52809 31.9668C6.74437 32.5362 5.68989 31.7701 5.98924 30.8488L9.1917 20.9926C9.32557 20.5806 9.17891 20.1293 8.82842 19.8746L0.444297 13.7832C-0.339417 13.2138 0.0633578 11.9742 1.03208 11.9742H11.3954C11.8287 11.9742 12.2126 11.6952 12.3465 11.2832L15.5489 1.42705Z" fill="#D1FAE5"/>
                </svg>
                <span  className='great_revietwo text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] 2xl:text-[38.43px]'>4.93 (15 reviews)</span></h2>

            <div className="flex justify-center items-center gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] xl:gap-[18px] 2xl:gap-[20px] mt-[50px] sm:mt-[0]">
                <div className="custom-prev cursor-pointer border-[#d1fae521] hover:border-[#D1FAE5] transform flex justify-center items-center z-50 w-[40px] lg:w-[52px] 2xl:w-[62px] h-[40px] lg:h-[52px] 2xl:h-[62px] border-[1px] rounded-full duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className=' w-[18px] sm:w-[20px] lg:w-[23px]'  viewBox="0 0 23 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 7.5C23 7.27902 22.9135 7.06709 22.7594 6.91083C22.6054 6.75457 22.3965 6.66678 22.1786 6.66678L2.80565 6.66678L7.97539 1.42419C8.12962 1.26773 8.21627 1.05553 8.21627 0.834269C8.21627 0.613007 8.12962 0.400808 7.97539 0.244352C7.82116 0.0878957 7.61197 2.81042e-07 7.39385 2.71508e-07C7.17574 2.61974e-07 6.96655 0.0878956 6.81232 0.244352L0.24131 6.91008C0.164818 6.98748 0.10413 7.07943 0.0627235 7.18066C0.021315 7.28188 3.32626e-07 7.3904 3.27835e-07 7.5C3.23045e-07 7.6096 0.0213149 7.71812 0.0627235 7.81934C0.10413 7.92057 0.164818 8.01252 0.24131 8.08992L6.81232 14.7556C6.96655 14.9121 7.17574 15 7.39385 15C7.61197 15 7.82116 14.9121 7.97539 14.7556C8.12962 14.5992 8.21627 14.387 8.21627 14.1657C8.21627 13.9445 8.12962 13.7323 7.97539 13.5758L2.80565 8.33322L22.1786 8.33322C22.3965 8.33322 22.6054 8.24543 22.7594 8.08917C22.9135 7.93291 23 7.72098 23 7.5Z" fill="#D1FAE5"/>
                    </svg>
                </div>
                <div className="custom-next cursor-pointer border-[#d1fae521] hover:border-[#D1FAE5]  transformz-50 flex justify-center items-center w-[40px] lg:w-[52px] 2xl:w-[62px] h-[40px] lg:h-[52px] 2xl:h-[62px] border-[1px] rounded-full duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className=' w-[18px] sm:w-[20px] lg:w-[23px]' viewBox="0 0 23 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.27835e-07 7.5C-3.37495e-07 7.27902 0.0865372 7.06709 0.240575 6.91083C0.394613 6.75457 0.603533 6.66678 0.821376 6.66678L20.1944 6.66678L15.0246 1.42419C14.8704 1.26773 14.7837 1.05553 14.7837 0.834269C14.7837 0.613007 14.8704 0.400808 15.0246 0.244352C15.1788 0.0878957 15.388 2.81042e-07 15.6061 2.71508e-07C15.8243 2.61974e-07 16.0334 0.0878956 16.1877 0.244352L22.7587 6.91008C22.8352 6.98748 22.8959 7.07943 22.9373 7.18066C22.9787 7.28188 23 7.3904 23 7.5C23 7.6096 22.9787 7.71812 22.9373 7.81934C22.8959 7.92057 22.8352 8.01252 22.7587 8.08992L16.1877 14.7556C16.0334 14.9121 15.8243 15 15.6061 15C15.388 15 15.1788 14.9121 15.0246 14.7556C14.8704 14.5992 14.7837 14.387 14.7837 14.1657C14.7837 13.9445 14.8704 13.7323 15.0246 13.5758L20.1944 8.33322L0.821376 8.33322C0.603533 8.33322 0.394613 8.24543 0.240575 8.08917C0.0865373 7.93291 -3.18176e-07 7.72098 -3.27835e-07 7.5Z" fill="#D1FAE5"/>
                    </svg>
                </div>
            </div>
        </div>
        <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index} className="review-slide flex-col ">
                    <div className="review-card w-[100vh] p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px] m-0"> {/* Center review card */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="24" viewBox="0 0 124 24" fill="none">
  <path d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z" fill="#D1FAE5"/>
  <path d="M36.0489 2.92705C36.3483 2.00574 37.6517 2.00574 37.9511 2.92705L39.4697 7.60081C39.6035 8.01284 39.9875 8.2918 40.4207 8.2918H45.335C46.3037 8.2918 46.7065 9.53141 45.9228 10.1008L41.947 12.9894C41.5966 13.244 41.4499 13.6954 41.5838 14.1074L43.1024 18.7812C43.4017 19.7025 42.3472 20.4686 41.5635 19.8992L37.5878 17.0106C37.2373 16.756 36.7627 16.756 36.4122 17.0106L32.4365 19.8992C31.6528 20.4686 30.5983 19.7025 30.8976 18.7812L32.4162 14.1074C32.5501 13.6954 32.4034 13.244 32.053 12.9894L28.0772 10.1008C27.2935 9.53141 27.6963 8.2918 28.665 8.2918H33.5793C34.0125 8.2918 34.3965 8.01284 34.5303 7.60081L36.0489 2.92705Z" fill="#D1FAE5"/>
  <path d="M61.0489 2.92705C61.3483 2.00574 62.6517 2.00574 62.9511 2.92705L64.4697 7.60081C64.6035 8.01284 64.9875 8.2918 65.4207 8.2918H70.335C71.3037 8.2918 71.7065 9.53141 70.9228 10.1008L66.947 12.9894C66.5966 13.244 66.4499 13.6954 66.5838 14.1074L68.1024 18.7812C68.4017 19.7025 67.3472 20.4686 66.5635 19.8992L62.5878 17.0106C62.2373 16.756 61.7627 16.756 61.4122 17.0106L57.4365 19.8992C56.6528 20.4686 55.5983 19.7025 55.8976 18.7812L57.4162 14.1074C57.5501 13.6954 57.4034 13.244 57.053 12.9894L53.0772 10.1008C52.2935 9.53141 52.6963 8.2918 53.665 8.2918H58.5793C59.0125 8.2918 59.3965 8.01284 59.5303 7.60081L61.0489 2.92705Z" fill="#D1FAE5"/>
  <path d="M86.0489 2.92705C86.3483 2.00574 87.6517 2.00574 87.9511 2.92705L89.4697 7.60081C89.6035 8.01284 89.9875 8.2918 90.4207 8.2918H95.335C96.3037 8.2918 96.7065 9.53141 95.9228 10.1008L91.947 12.9894C91.5966 13.244 91.4499 13.6954 91.5838 14.1074L93.1024 18.7812C93.4017 19.7025 92.3472 20.4686 91.5635 19.8992L87.5878 17.0106C87.2373 16.756 86.7627 16.756 86.4122 17.0106L82.4365 19.8992C81.6528 20.4686 80.5983 19.7025 80.8976 18.7812L82.4162 14.1074C82.5501 13.6954 82.4034 13.244 82.053 12.9894L78.0772 10.1008C77.2935 9.53141 77.6963 8.2918 78.665 8.2918H83.5793C84.0125 8.2918 84.3965 8.01284 84.5303 7.60081L86.0489 2.92705Z" fill="#D1FAE5"/>
  <path d="M111.049 2.92705C111.348 2.00574 112.652 2.00574 112.951 2.92705L114.47 7.60081C114.604 8.01284 114.987 8.2918 115.421 8.2918H120.335C121.304 8.2918 121.706 9.53141 120.923 10.1008L116.947 12.9894C116.597 13.244 116.45 13.6954 116.584 14.1074L118.102 18.7812C118.402 19.7025 117.347 20.4686 116.564 19.8992L112.588 17.0106C112.237 16.756 111.763 16.756 111.412 17.0106L107.436 19.8992C106.653 20.4686 105.598 19.7025 105.898 18.7812L107.416 14.1074C107.55 13.6954 107.403 13.244 107.053 12.9894L103.077 10.1008C102.294 9.53141 102.696 8.2918 103.665 8.2918H108.579C109.013 8.2918 109.396 8.01284 109.53 7.60081L111.049 2.92705Z" fill="#D1FAE5"/>
  <path d="M111.049 2.92705C111.348 2.00574 112.652 2.00574 112.951 2.92705L114.47 7.60081C114.604 8.01284 114.987 8.2918 115.421 8.2918H120.335C121.304 8.2918 121.706 9.53141 120.923 10.1008L116.947 12.9894C116.597 13.244 116.45 13.6954 116.584 14.1074L118.102 18.7812C118.402 19.7025 117.347 20.4686 116.564 19.8992L112.588 17.0106C112.237 16.756 111.763 16.756 111.412 17.0106L107.436 19.8992C106.653 20.4686 105.598 19.7025 105.898 18.7812L107.416 14.1074C107.55 13.6954 107.403 13.244 107.053 12.9894L103.077 10.1008C102.294 9.53141 102.696 8.2918 103.665 8.2918H108.579C109.013 8.2918 109.396 8.01284 109.53 7.60081L111.049 2.92705Z" fill="#D1FAE5"/>
                    </svg>
                        <p className="review-text mt-[12px] md:mt-[14px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] text-[13px] sm:text-[14] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[21.33px] opacity-[0.7]">"{review.review}"</p>
                    </div>
                    <div className="reviewer-info gap-[10px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] xl:gap-[18px] 2xl:gap-5 items-center mt-[19px] sm:mt-[21px] md:mt-[23px] lg:mt-[25px] xl:mt-[27px] 2xl:mt-[29px]">
                            <img src={review.img} alt={review.name} className="reviewer-img" />
                            <div>
                                <h4 className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] mb-[2px]'>{review.name}</h4>
                                <p className='text-[8px] sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]'>{review.date}</p>
                            </div>
                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
        

        </div>
        </div>
    );
};

export default Page5;






