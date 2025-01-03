import React from 'react';
import { motion } from 'framer-motion';
import leaf1 from "../../../assets2/leaf1.png";

const LeafAnimation: React.FC = () => {

  // Define animation variants for Framer Motion
  const leafVariants = {
    initial: { 
      scale: 1, 
      rotate: 0, 
      filter: 'blur(0px)', 
      opacity: 1 
    },
    hover: {
      scale: 3, 
      rotate: 5, // Slight rotation
      filter: 'blur(5px)', // Add blur while scaling up
      opacity: 0.99, // Fade out a bit
      transition: {
        duration: 0.5, // Animation duration
        ease: 'easeInOut', // Smoother animation
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover" // Trigger animation on hover
      variants={leafVariants}
      style={{
        width: '150px', // Adjust size based on your requirement
        height: '150px',
        cursor: 'pointer',
      }}
    >
      {/* The leaf image */}
      <img 
        src={leaf1} 
        alt="Leaf" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </motion.div>
  );
};

export default LeafAnimation;
