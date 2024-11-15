import React, { useState } from 'react';
import footerimagelog from '../header/image/image 1.png';
import './footer.css'

const Footer = () => {        
    return (
        <div className="footerbackgroundimages">
        <section className="footerbackgroundleayer sm:pt-[30px] lg:pt-[50px]">
    <div className="container mx-auto px-[24px] sm:px-[0]">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[110px] xl:w-[130px] 2xl:w-[150px]" src={footerimagelog} alt="" />

                <p className="footertalingbarp mt-[25px] text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]">We’re talking newly built homes, urban-chic vibes.</p>
            </div>

            <div>
                <p className="aboutsectionataghead flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] mb-[12px] sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px]">Usefull Links</p>

                <ul className=" space-y-[8px] sm:space-y-[11px] lg:space-y-[13px] 2xl:space-y-[15px]">
                    <li>
                        <a href="Vacation Rental Investing" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]"> Vacation Rental Investing </a>
                    </li>

                    <li>
                        <a href="About" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]"> About </a>
                    </li>

                    <li>
                        <a href="Contact" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]"> Contact </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="aboutsectionataghead flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] mb-[12px] sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px]">social media</p>

                <ul className=" space-y-[8px] sm:space-y-[11px] lg:space-y-[13px] 2xl:space-y-[15px]">
                    <li>
                        <a href="Facebook" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]">Facebook</a>
                    </li>

                    <li>
                        <a href="Instagram" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]"> Instagram </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="aboutsectionataghead flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] mb-[12px] sm:mb-[15px] md:mb-[17px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px]">Contact US</p>

                <ul className=" space-y-[8px] sm:space-y-[11px] lg:space-y-[13px] 2xl:space-y-[15px]">
                    <li>
                        <a href="(512) 222-7512" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]">(512) 222-7512</a>
                    </li>

                    <li>
                        <a href="hello@urbanstay.us" title="" className="aboutsectionatagchield flex opacity-60 text-[#FFFFFF] transition-all duration-200 hover:opacity-100 focus:opacity-100 text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px]"> hello@urbanstay.us </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-[20px] sm:mt-[25px] lg:mt-[35px] xl:mt-[50px]  border-gray-200 bg-[#fff] opacity-20" />

        <p className="copyrightsection text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[15px] sm:py-[20px] lg:py-[25px] xl:py-[30]">© Copyright 2021, All Rights Reserved by Postcraft</p>
    </div>
</section>
</div>

    )
}
export default Footer;