import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import Nav from '../components/Home/Nav';
import '../style/home.css';
import ContentHome from '../components/Home/ContentHome';

const Home = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className='home'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav />
      <ContentHome />
    </motion.div>
  );
};

export default Home;
