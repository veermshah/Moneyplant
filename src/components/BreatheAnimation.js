import React from 'react';
import { motion } from 'framer-motion';
import '../BreatheAnimation.css'; // Import your CSS file for styling

const BreatheAnimation = () => {
  const breatheAnimation = {
    scale: [1, 20], // Scale from 1 to 1.2 and back to 1
    transition: {
      duration: 5, // Animation duration in seconds
      ease: 'easeInOut', // Easing function
      loop: 1,
    },
  };

  return (
    <div className="breathe-container">
      <motion.div
        className="circle"
        animate={breatheAnimation}
      >
        <h1 className='flex mt-10 mx-4 text-white'>BREATHE</h1>
      </motion.div>
    </div>
  );
};

export default BreatheAnimation;