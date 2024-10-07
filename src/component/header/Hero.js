import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="">
        <div className='flex flex-col justify-center items-center'>
            <h2 className="font-Gellix700 text-[#fff] Stay-Togather text-[30px] sm:text-[38px] md:text-[45px] lg:text-[60px] xl:text-[75px] 2xl:text-[89.76px] pb-[15px] sm:pb-[17px] md:pb-[19px] lg:pb-[21px] xl:pb-[23px] 2xl:pb-[25px]">Stay Togather</h2>
            <p className='Forget-Hotels text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28.43px] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[35px] xl:pb-[46px] 2xl:pb-[50px]'>Forget Hotels, Stay Locals</p>
            <div className="date-header1 mb-[50px] sm:mb-[70px] md:mb-[90px] lg:mb-[120px] xl:mb-[140px] 2xl:mb-[166px]">
                <div className="date-header pl-[20px] sm:pl-[22px] md:pl-[24px] lg:pl-[26px] xl:pl-[28px] 2xl:pl-[30px] py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[28px] 2xl:py-[30px] pr-[20px] sm:pr-[22px]  md:pr-[0] ">
                    <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[39px] ">
                        <div className="flex justify-start items-start flex-col gap-[13px] lg:gap-[17px]">
                            <p className='CHECK-IN text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>CHECK IN</p>
                            <div className="march-date-header flex justify-start items-center gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px] xl:gap-[40px] 2xl:gap-[45px]">
                                <h4 className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21.33px]'>Mar 20, 2022</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H21M7 1V5V1ZM15 1V5V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start items-start flex-col gap-[13px] lg:gap-[17px]">
                            <p className='CHECK-IN text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>CHECKOUT</p>
                            <div className="march-date-header flex justify-start items-center gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px] xl:gap-[40px] 2xl:gap-[45px]">
                                <h4 className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21.33px]'>Mar 23, 2022</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H21M7 1V5V1ZM15 1V5V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start items-start flex-col gap-[13px] lg:gap-[17px]">
                            <p className='CHECK-IN text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>GUESTS</p>
                            <div className="march-date-header flex justify-start items-center gap-[30px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] xl:gap-[70px] 2xl:gap-[88px]">
                                <h4 className='text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21.33px]'>1</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="17" viewBox="0 0 56 17" fill="none">
                                <path d="M55 8.5H40M47.5 1V16V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 8H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start items-start flex-col gap-[13px] lg:gap-[17px] ">
                                <button className='bookbutton1 bg-[#D1FAE5] hover:bg-[#9eddbc] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] p-[15px] sm:p-[16px] md:p-[17px] lg:p-[18px] xl:p-[19px] 2xl:p-[20px] secendbuttonimageslll flex items-center md:mr-[-24px] relative z-[1]'>SEARCH NOW 
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15" viewBox="0 0 23 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.27835e-07 7.5C-3.37495e-07 7.27902 0.0865372 7.06709 0.240575 6.91083C0.394613 6.75457 0.603533 6.66678 0.821376 6.66678L20.1944 6.66678L15.0246 1.42419C14.8704 1.26773 14.7837 1.05553 14.7837 0.834269C14.7837 0.613007 14.8704 0.400808 15.0246 0.244352C15.1788 0.0878957 15.388 2.81042e-07 15.6061 2.71508e-07C15.8243 2.61974e-07 16.0334 0.0878956 16.1877 0.244352L22.7587 6.91008C22.8352 6.98748 22.8959 7.07943 22.9373 7.18066C22.9787 7.28188 23 7.3904 23 7.5C23 7.6096 22.9787 7.71812 22.9373 7.81934C22.8959 7.92057 22.8352 8.01252 22.7587 8.08992L16.1877 14.7556C16.0334 14.9121 15.8243 15 15.6061 15C15.388 15 15.1788 14.9121 15.0246 14.7556C14.8704 14.5992 14.7837 14.387 14.7837 14.1657C14.7837 13.9445 14.8704 13.7323 15.0246 13.5758L20.1944 8.33322L0.821376 8.33322C0.603533 8.33322 0.394613 8.24543 0.240575 8.08917C0.0865373 7.93291 -3.18176e-07 7.72098 -3.27835e-07 7.5Z" fill="black"/>
                                </svg>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center px-[10px] sm:px-[0] pb-[40px] sm:pb-[45px] md:pb-[50px] lg:pb-[60px] xl:pb-[70px] 2xl:pb-[80px]">
                <div className="flex justify-center items-center gap-[12px] lg:gap-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" className='bg-[#1E1E1E] rounded-[40px] w-[20px] sm:w-[25px] md:w-[30px] lg:w-[40px] h-[20px] sm:h-[25px] md:h-[30px] lg:h-[40px]' viewBox="0 0 40 40" fill="none">
                <rect x="16" y="14" width="2" height="12" rx="1" fill="white"/>
                <rect x="23" y="14" width="2" height="12" rx="1" fill="white"/>
                <defs>
                    <filter id="filter0_b_94_111" x="-50" y="-50" width="140" height="140" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_94_111"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_94_111" result="shape"/>
                    </filter>
                </defs>
                </svg>
                <NavLink to="/PAUSE" className={({isActive}) => `${isActive ? "nav-link active-link" : "nav-link"} text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]`}>PAUSE</NavLink>
                </div>
                <div className="">
                    <div className="h-[3px] sm:h-[4px] w-[64px] sm:w-[100px] md:w-[130px] lg:w-[160] xl:w-[180px] 2xl:w-[196px] bg-[#d1fae54b] rounded-[4px] relative">
                    <div className="h-[3px] sm:h-[4px] w-[13px] sm:w-[15px] md:w-[17px] lg:w-[19px] xl:w-[21px] 2xl:w-[23px] bg-[#d1fae5] rounded-[4px] absolute top-0 left-[-6.5px] sm:left-[-7.5px] md:left-[-8.5px] lg:left-[-9.5px] xl:left-[-11px] 2xl:left-[-11.5px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;