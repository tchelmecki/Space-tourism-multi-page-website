import React from 'react'
import Nav from '../components/ForAll/Nav'
import ContentCrew from '../components/Crew/ContentCrew'
import {motion} from 'framer-motion';

const Crew = () => {
  return (
    <motion.div 
      className='container-crew'
      initial="hidden"
      animate="visible"
    >
    <Nav/>
    <ContentCrew/>
    </motion.div>
  )
}

export default Crew