import React from 'react';
import Header from './component/header/Header';
import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import { motion } from 'framer-motion';

const Component = () => {
      // Animations for each section
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
    return (
        <div>
            <Header/>
            <Body/>
            <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
            <Footer/>
            </motion.div>
        </div>
    );
};

export default Component;