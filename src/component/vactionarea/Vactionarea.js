import React from 'react';
import HeroVaction from './HreoVaction';
import { motion } from 'framer-motion';
import Vactionarea2 from './vactionarea2';
import Vactionarea3 from './vactionarea3';
import Page5 from '../../pages/Page5';

const Vactionarea = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      };
    return (
        <div>
            <header className='headerbackground'>
                <div className="headerbgleayer">
                    <div className="container mx-auto">
                        {/* <Navbar/> */}
                        <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
                        <HeroVaction/>
                        </motion.div>
                    </div>
                </div>
            </header> 
            <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
                <Vactionarea2/>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
                <Vactionarea3/>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={sectionVariants}>
                <div className="">
                <Page5
  className="pt-[40px] sm:pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px] 2xl:pt-[120px] bg-gradient-to-b from-[rgba(30,30,30,0.679)] to-[rgba(30,30,30,0)]"
/>

                </div>
            </motion.div>
        </div>
    );
};

export default Vactionarea;