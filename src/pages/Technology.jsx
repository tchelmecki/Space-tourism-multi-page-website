import React from 'react';
import Nav from '../components/ForAll/Nav';
import {motion} from 'framer-motion';
import ContentTechnology from '../components/Technology/ContentTechnology';


const Technology = () => {
  return (
    <motion.div 
      className='container-technology'
      initial="hidden"
      animate="visible"
    >
    <Nav/>
    <ContentTechnology/>
    </motion.div>
  )
}

export default Technology