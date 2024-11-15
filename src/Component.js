import React from 'react';
import Header from './component/header/Header';
import Body from './component/body/Body';
// import Footer from './component/footer/Footer';
// import { motion } from 'framer-motion';
// import { Routes, Route } from 'react-router-dom';
// import Page4 from './pages/Page4';
// import Page5 from './pages/Page5';
// import Navbar from './component/header/Navbar';


const Component = () => {
      // Animations for each section
  // const sectionVariants = {
  //   hidden: { opacity: 0, y: 70 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  // };
    return (
        <div>
            {/* <Navbar/> */}
            <Header/>            
            <Body/>
        </div>
    );
};

export default Component;