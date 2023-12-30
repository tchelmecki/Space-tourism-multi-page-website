import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/destination.css';
import Nav from '../components/ForAll/Nav';
import ContentDestination from '../components/Destination/ContentDestination';

const Destination = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  

  return (
    <motion.div 
      className='destination-content'
      // variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav />
      <ContentDestination/>

    </motion.div>
  );
}

export default Destination;
