import React, { useState } from 'react';
import data from '../../assets/data.json';
import '../../style/destination.css';
import { motion } from 'framer-motion';


const ContentDestination = () => {
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      };
    
      const [selectedPlanet, setSelectedPlanet] = useState( 
           data.destinations.length > 0 ? data.destinations[0].name : null
        );
    
      const handlePlanetClick = (planetName) => {
        setSelectedPlanet(planetName);
      };

    return (
    <div className="content">
    <div className="space-object">
      <p><span>01</span> PICK YOUR DESTINATION</p>
      {selectedPlanet && (
        <motion.div
          key={selectedPlanet}  // Dodaj klucz do zapewnienia unikalności
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className='display-planet'
        >
          <img
            src={
              data.destinations.find(
                (destination) => destination.name === selectedPlanet
              )?.images?.png || ''
            }
            alt="Selected Planet"
          />
        </motion.div>
      )}
    </div>
    <div className="choose-object">
      <div className='planets-name'>
        {data.destinations.map((destination, i) => (
          <motion.div
          className={`planet ${destination.name === selectedPlanet ? 'active' : ''}`}
          key={i}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            onClick={() => handlePlanetClick(destination.name)}
          >
            {destination.name}
          </motion.div>
        ))}
      </div>
      
      {selectedPlanet && (
        <motion.div
          className='selected-planet-info'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {data.destinations.map((destination, i) =>
            destination.name === selectedPlanet ? (
              <div className='planets-chosen' key={i}>
                <p>{destination.name}</p>
                <p>{destination.description}</p>
                <div className='distance-travel'>
                <span>avg distance: </span>
                <span>{destination.distance}</span>
                <span>est. travel time: </span>

                <span>{destination.travel}</span>
                </div>
              </div>
            ) : null
          )}
        </motion.div>
      )}
    </div>
  </div>
  )
}

export default ContentDestination