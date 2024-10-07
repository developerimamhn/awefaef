import React from 'react';
import aboutimage from './image2/Group 68.png';

const About  = () => {
    return (
        <div className='bg-[#000]'>
            <div className="container mx-auto pt-[300px] sm:pt-[150px] md:pt-[220px] lg:pt-[250px] xl:pt-[320px] 2xl:pt-[337px]">
                <div className="px-[10px] xl:px-0 flex flex-col sm:flex-row justify-between items-center gap-[30px] sm:gap-[17px] lg:gap-[27px] pb-[100px] sm:pb-[130px] md:pb-[160px] lg:pb-[190px] xl:pb-[115px] 2xl:pb-[231px]">
                    <div className="flex-1">
                        <span className="about_span relative text-[#D1FAE5] font-normal text-[14px] sm:text-[15.43px] md:text-[16.43px] lg:text-[20.43px] xl:text-[24.43px] 2xl:text-[28.43px] before:content-[''] before:block before:h-[1px] before:w-[35px] before:sm:w-[40px] before:md:w-[45px] before:lg:w-[50px] before:xl:w-[55px] before:2xl:w-[59px] before:absolute before:top-[50%] before:left-[-55px] before:sm:left-[-66px] before:md:left-[-65px] before:lg:left-[-70px] before:xl:left-[-75px] [-89px] before:2xl:left-[-89px] before:bg-white text-center ml-[55px] sm:ml-[66px] md:ml-[65px] lg:ml-[70px] xl:ml-[75px]  2xl:ml-[89px]">About us</span>
                        <h2 className='We-bring-the text-[18px] sm:text-[20px] md:text-[23px] lg:text-[28px] xl:text-[33px] 2xl:text-[37.9px] mt-[17] sm:mt-[18px] md:mt-[19px] lg:mt-[20px] xl:mt-[21px] 2xl:mt-[22px] '>Team of local Austinites with industry know-how and a knack for crafting a good-ass time.</h2>
                        <p className='Were-creatives talking-newly text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[21.33px] mt-[14px] sm:mt-[14px] md:mt-[18px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[30px]'>We’re - creatives, real estate gurus, designers, engineers, marketers, mortgage pros, copywriters, tax experts - collabing to bring our unique flair to this dynamic industry.</p>
                        <button className='flex justify-center items-center gap-[20px] sm:gap-[22px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] 2xl:gap-[30px] BOOKNOW text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[21.33px] 2xl:mt-[60px] xl:mt-[50px] lg:mt-[40px] md:mt-[30px] sm:mt-[25px] mt-[20px]'>BOOK NOW 
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.27835e-07 7.5C-3.37495e-07 7.27902 0.0865372 7.06709 0.240575 6.91083C0.394613 6.75457 0.603533 6.66678 0.821376 6.66678L20.1944 6.66678L15.0246 1.42419C14.8704 1.26773 14.7837 1.05553 14.7837 0.834269C14.7837 0.613007 14.8704 0.400808 15.0246 0.244352C15.1788 0.0878957 15.388 2.81042e-07 15.6061 2.71508e-07C15.8243 2.61974e-07 16.0334 0.0878956 16.1877 0.244352L22.7587 6.91008C22.8352 6.98748 22.8959 7.07943 22.9373 7.18066C22.9787 7.28188 23 7.3904 23 7.5C23 7.6096 22.9787 7.71812 22.9373 7.81934C22.8959 7.92057 22.8352 8.01252 22.7587 8.08992L16.1877 14.7556C16.0334 14.9121 15.8243 15 15.6061 15C15.388 15 15.1788 14.9121 15.0246 14.7556C14.8704 14.5992 14.7837 14.387 14.7837 14.1657C14.7837 13.9445 14.8704 13.7323 15.0246 13.5758L20.1944 8.33322L0.821376 8.33322C0.603533 8.33322 0.394613 8.24543 0.240575 8.08917C0.0865372 7.93291 -3.18176e-07 7.72098 -3.27835e-07 7.5Z" fill="#D1FAE5"/>
                  </svg>
                    </button>
                    </div>
                    <div className="flex-1">
                        <img src={aboutimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;