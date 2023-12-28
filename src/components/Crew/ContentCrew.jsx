import React, { useState } from 'react';
import '../../style/crew.css';
import {motion} from 'framer-motion';
import data from '../../assets/data.json';


const ContentCrew = () => {
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      };
    
      const [selectedPlanet, setSelectedPlanet] = useState( 
           data.crew.length > 0 ? data.crew[0].name : null
        );
    
      const handlePlanetClick = (planetName) => {
        setSelectedPlanet(planetName);
      };

    return (
    <div className="content-crew">
    <div>
    <div  className="title-page">
        <p className='meet-your-creew'><span>02</span> MEET YOUR CREW</p>
    </div>
    <div className="crew-info">

      
      
      {selectedPlanet && (
        <motion.div
          className='selected-pla'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {data.crew.map((crew, i) =>
            crew.name === selectedPlanet ? (
              <div className='' key={i}>
                <p>{crew.role}</p>
                <p>{crew.name}</p>
                <div className='distance-trave'>
                <span>{crew.bio}</span>
                </div>
              </div>
            ) : null
          )}
        </motion.div>
      )}

    <div className='crew-name'>
        {data.crew.map((crew, i) => (
          <motion.div
          className={`dots-choose-crew ${crew.name === selectedPlanet ? 'active' : ''}`}
          key={i}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            onClick={() => handlePlanetClick(crew.name)}
          >
            <span className='dots-choose-crew'></span>
          </motion.div>
        ))}
      </div>
    
    </div>
    </div>


    <div className="choose-crew">
    {selectedPlanet && (
        <motion.div
        key={selectedPlanet}  // Dodaj klucz do zapewnienia unikalności

          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={
              data.crew.find(
                (crew) => crew.name === selectedPlanet
              )?.images?.png || ''
            }
            alt="Selected Crew"
          />
        </motion.div>
      )}
    </div>



  </div>
  )
}

export default ContentCrew