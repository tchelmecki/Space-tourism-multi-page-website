import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import '../style/destination.css';
import Nav from '../components/Home/Nav';
import planet from '../assets/destination/image-moon.png';
const Destination = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      };

  return (
    <motion.div 
    className='destination-content'
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
    <Nav/>
    <div className="content">
        <div className="space-object">
            <p><span>01</span> PICK YOUR DESTINATION</p>
            <img src={planet} alt="" />
        </div>
        <div className="choose-object">
            <p className='planets-name'><span>MOON</span><span>MARS</span><span>EUROPA</span><span>TITAN</span></p>
            <p className='planet'>MOON</p>
            <p></p>
            <div className="distance">
                <span>average</span>
                <span>3days</span>
            </div>
        </div>
    </div>
    
    </motion.div>
  )
}

export default Destination;