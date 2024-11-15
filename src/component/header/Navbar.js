import React, { useState } from 'react';
import logo from './image/image 1.png';
import { NavLink, Route, Routes } from 'react-router-dom';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import Component from '../../Component';
import Vactionarea from '../vactionarea/Vactionarea';
import Contactpage from '../contactpage/Contactpage';
import MainPagesthree from '../pagesthree/MainPagesthree';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <nav className='relative z-[9999]   '>
            <div className="z-[999]  fixed left-[50%] translate-x-[-50%] w-[100%] 2xl:w-full container mx-auto px-[24px] sm:px-auto">
                <div className="flex sm:justify-between items-center py-[20px] sm:py-[25px] md:py-[30px] lg:py-[40px] xl:py-[51px] 2xl:py-[61px] transition-all duration-500 relative">
                <div className="">
                <NavLink to="/">
                    <img className='w-[70px] sm:w-[80px] md:w-[90px] lg:w-[110px] xl:w-[130px] 2xl:w-[150px]' src={logo} alt="" />
                </NavLink>
                </div>

                {
                        toggle? 
                        <LiaBarsSolid onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden absolute right-0'/>
                        :
                        <VscChromeClose onClick={()=>setToggle(!toggle)} className='text-white text-[26px] sm:hidden absolute right-0'/>
                        }
                <ul>
                    <li className={`navbarpages flex items-center flex-col sm:flex-row gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[35px] xl:gap-[40px] 2xl:gap-[45px] absolute sm:top-0 top-[100%] sm:right-0  sm:relative sm:opacity-100 bg-[#3a3a3a] sm:bg-transparent w-full h-[100vh] sm:h-auto  p-[30px] sm:pb-auto  duration-300  sm:rounded-0 
                        ${toggle ? 'right-[100%] ' : 'right-[0%]'}
                        ${toggle ? 'opacity-0' : 'opacity-100'}
                    `}>
                    <NavLink to="/VACATIONRENTALINVESTING" className={({isActive}) => `${isActive ? "nav-link active-link" : "nav-link"} text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]`}>VACATION RENTAL INVESTING</NavLink>

                    <NavLink to="/about" className={({isActive}) => `${isActive ? "nav-link active-link" : "nav-link"} text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]`}>ABOUT</NavLink>

                    <NavLink to="/CONTACT" className={({isActive}) => `${isActive ? "nav-link active-link" : "nav-link"} text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]`}>CONTACT</NavLink>

                    <button className='bookbutton bg-[#D1FAE5] hover:bg-[#9eddbc] text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[10px] sm:py-[11px] md:py-[12px] lg:py-[13px] xl:py-[14px] 2xl:py-[15px] px-[13px] sm:px-[16px] md:px-[20px] lg:px-[24px] xl:px-[28px] 2xl:px-[30px]'>BOOK NOW</button>
                    </li>
                </ul>
                </div>
            </div>
            <Routes>
                <Route index path='/' element={<Component/>}></Route>
                <Route path='/about' element={<Vactionarea/>}></Route>
                <Route path='/CONTACT' element={<Contactpage/>}></Route>
                <Route path='/VACATIONRENTALINVESTING' element={<MainPagesthree/>}></Route>
            </Routes>
        </nav>
    );
};

export default Navbar;