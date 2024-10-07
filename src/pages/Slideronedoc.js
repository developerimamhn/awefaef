import React from 'react';
import imageone from './slideronedocimages/Rectangle 16.png';
import imagetwo from './slideronedocimages/Rectangle 17.png';

const Slideronedoc = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex justify-center items-center gap-[20px] sm:gap-[22px] md:gap-[24px] lg:gap-[26px] xl:gap-[28px] 2xl:gap-[30px] relative">
                <span className='vssection text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px] bg-[#D1FAE5] w-[60px] sm:w-[65px] md:w-[70px] lg:w-[75px] xl:w-[85px] 2xl:w-[100px] h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px] xl:h-[85px] 2xl:h-[100px] flex justify-center items-start pt-[1px] rounded-full absolute left-[50%] top-[42%] translate-x-[-50%] trasnlate-y-[-50%] z-10 border-[#000] border-[9px]'>vs</span>
                <div className="relative">
                    <img src={imageone} alt="imageone" />
                    <div className='usstaytogether pt-[16px] sm:pt-[18px] md:pt-[20px] lg:pt-[22px] xl:pt-[24px] 2xl:pt-[26px] pb-[18px] sm:pb-[21px] md:pb-[24px] lg:pb-[27px] xl:pb-[30px] 2xl:pb-[33px] pl-[20px] sm:pl-[24px] md:pl-[28px] lg:pl-[32px] xl:pl-[36px] 2xl:pl:-[40px] md:absolute  bottom-[20px] sm:bottom-[24px] md:bottom-[28px] lg:bottom-[32px] xl:bottom-[36px] 2xl:bottom:-[40px] md:w-[95%] overflow-hidden'>
                        <h2 className='usclothing text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px]'>US</h2>
                        <p className='starytogetehrethree text-[14px] sm:text-[16px] md:text-[19px] lg:text-[22px] xl:text-[25px] 2xl:text-[28.43px]'>Stay Togather</p>
                    </div>
                </div>
                <div className="relative">
                <img src={imagetwo} alt="imageone" />
                    <div className='usstaytogether pt-[16px] sm:pt-[18px] md:pt-[20px] lg:pt-[22px] xl:pt-[24px] 2xl:pt-[26px] pb-[18px] sm:pb-[21px] md:pb-[24px] lg:pb-[27px] xl:pb-[30px] 2xl:pb-[33px] pl-[20px] sm:pl-[24px] md:pl-[28px] lg:pl-[32px] xl:pl-[36px] 2xl:pl:-[40px] md:absolute  bottom-[20px] sm:bottom-[24px] md:bottom-[28px] lg:bottom-[32px] xl:bottom-[36px] 2xl:bottom:-[40px] md:w-[95%]'>
                        <h2 className='usclothingone text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50.52px]'>Hotels</h2>
                        <p className='starytogetehrethree text-[14px] sm:text-[16px] md:text-[19px] lg:text-[22px] xl:text-[25px] 2xl:text-[28.43px]'>Stay Alone</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideronedoc;