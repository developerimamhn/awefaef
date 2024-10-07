import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import Hero from './Hero';
import { motion } from 'framer-motion';

const Header = () => {
      // Animations for each section
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
    return (
        <header className='headerbackground'>
            <div className="headerbgleayer">
                <div className="container mx-auto">
                    <Navbar/>
                    <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
                    <Hero/>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;