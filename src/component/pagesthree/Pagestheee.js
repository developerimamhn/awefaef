import React from 'react';
import images from './images/Group 82.svg';
import './pagesthree.css'; // Your custom CSS or Tailwind CSS styles

const Pagestheee = () => {
  return (
    <div className='headerbackground'>
      <div className="headerbgleayer relative">
        <div className="container mx-auto grid grid-cols-12 pt-[80px] sm:pt-[110px] md:pt-[130px] lg:pt-[150px] xl:pt-[170px] 2xl:pt-[193px] items-center lg:h-screen gap-11 lg:gap-0 px-[24px] sm:px-0">
            <div className="col-span-full lg:col-span-5 ">
            <h2 className='We-bring-the-one text-[30px] sm:text-[35px] md:text-[40px] lg:text-[43px] xl:text-[45px] 2xl:text-[50.52px] mt-[17px] sm:mt-[18px] md:mt-[19px] lg:mt-[20px] xl:mt-[21px] 2xl:mt-[22px] leading-[40px] sm:leading-[63.63px]'>Maximize your earning potential while minimizing the headache</h2>
            <p className='We_partner_real text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21.33px] mt-[20px] sm:mt-[22px] md:mt-[24px] lg:mt-[26px] xl:mt-[28px] 2xl:mt-[30px]'>We partner real estate investors with our vacation rental experts. From preliminary analysis to welcoming your first guest, we support you every step of the way.</p>
            </div>
            <div className="col-span-full lg:col-span-7 ">
                <img className='lg:w-[55%] lg:absolute lg:right-0 lg:bottom-0' src={images} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pagestheee;
