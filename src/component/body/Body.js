import React from 'react';
import { motion } from 'framer-motion';
import StayLocal from '../../pages/Page1';
import About from '../../pages/Page2';
import WorkTogather from '../../pages/page3';
import Page4 from '../../pages/Page4';
import Page5 from '../../pages/Page5';

const Body = () => {
  // Animations for each section
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div>
      {/* Each section wrapped with motion.div for animations */}
      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
        <StayLocal />
      </motion.div>

      {/* <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}> */}
        <About />
      {/* </motion.div> */}

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
        <WorkTogather />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
        <Page4 />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
        <Page5 />
      </motion.div>
    </div>
  );
};

export default Body;
