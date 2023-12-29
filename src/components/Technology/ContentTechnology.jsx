import React, { useState } from 'react'
import '../../style/technology.css';
import '../../style/crew.css';
import data from '../../assets/data.json';
import {motion} from 'framer-motion';

const ContentTechnology = () => {
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      };
    
      const [selectedPlanet, setSelectedPlanet] = useState( 
           data.technology.length > 0 ? data.technology[0].name : null
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
    <div className="tech-info">

      
      
      {selectedPlanet && (
        <motion.div
          className='tech'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {data.technology.map((technology, i) =>
            technology.name === selectedPlanet ? (
              <div className='tech-info' key={i}>
                <p>The terminology</p>
                <p>{technology.description}</p>
              </div>
            ) : null
          )}
        </motion.div>
      )}

    <div className='container-circle'>
        {data.technology.map((technology, i) => (
          <motion.div
          className={`dots-choose-crew ${technology.name === selectedPlanet ? 'active' : ''}`}
          key={i}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            onClick={() => handlePlanetClick(technology.name)}
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
              data.technology.find(
                (technology) => technology.name === selectedPlanet
              )?.images?.portrait || ''
            }
            alt="Selected Crew"
          />
        </motion.div>
      )}
    </div>



  </div>
    )
}

export default ContentTechnology