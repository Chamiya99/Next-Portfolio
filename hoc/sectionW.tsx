import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../app/Styles';
import { staggerContainer } from '../utils/motion';


const sectionW = (Component: React.ComponentType, idName: string) => {
  return function HOC() {
    return (
      <motion.section id='experience'
        variants={staggerContainer(null, null)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          {"&nbsp;"}
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default sectionW;
