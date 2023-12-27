import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/destination.css';
import Nav from '../components/Home/Nav';
import data from '../assets/data.json';

const Destination = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

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
    <motion.div 
      className='destination-content'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav />
      <div className="content">
        <div className="space-object">
          <p><span>01</span> PICK YOUR DESTINATION</p>
          {selectedPlanet && (
            <motion.div
            key={selectedPlanet}  // Dodaj klucz do zapewnienia unikalności

              variants={imageVariants}
              initial="hidden"
              animate="visible"
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
                  <div className='' key={i}>
                    <h1>{destination.name}</h1>
                    <p>{destination.description}</p>
                    <p>Distance: {destination.distance}</p>
                    <p>Travel time: {destination.travel}</p>
                  </div>
                ) : null
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Destination;
