import React from 'react';
import aboutimage from './imagesone/Group 1171275383.png';

const vactionarea2 = () => {
    return (
        <div>
            <div className='bg-[#000] relative '>
            <div className="container mx-auto mt-[0px] sm:mt-[250px] md:mt-[200px] lg:mt-[200px] xl:mt-[420px] 2xl:mt-[481px]">
                <div className="px-[10px] xl:px-0 flex flex-col md:flex-row justify-between items-center gap-[40px] sm:gap-[50px] md:gap-[70] lg:gap-[90px] xl:gap-[110px] 2xl:gap-[138px] py-[100px] sm:py-[74px] md:py-[82px] lg:py-[95px] xl:py-[110px] 2xl:py-[139px] px-[24px] sm:px-0">
                    <div className="flex-1">
                        <h2 className='We-bring-the-one text-[30px] sm:text-[35px] md:text-[40px] lg:text-[43px] xl:text-[45px] 2xl:text-[50.52px] mt-[17px] sm:mt-[18px] md:mt-[19px] lg:mt-[20px] xl:mt-[21px] 2xl:mt-[22px] leading-[40px] sm:leading-[63.63px]'>Build your own dreams, or someone else will hire you to build theirs</h2>
                        <p className='Were-creatives talking-newly text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[21.33px] mt-[14px] sm:mt-[14px] md:mt-[18px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[30px] '>Our first UrbanStay property was an escape from the corporate 9-5 job. We knew life had so much more to offer outside the rat race: exploration of new worlds, authentic conversations with friends, and unforgettable memories. <br /> <br />

                        We founded UrbanStay to provide travelers an experience that we longed for ourselves while also freeing us from our day jobs to explore new places just like many of the guests we host.</p>
                    </div>
                    <div className="flex-1 relative z-[2]">
                        <img src={aboutimage} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-[30%] h-[100%] bg-[#1E1E1E] absolute right-0 top-0 z-[1] hidden lg:block"></div>
        </div>
        </div>
    );
};

export default vactionarea2;