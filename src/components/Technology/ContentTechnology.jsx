import React, { useEffect, useState } from 'react'
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

      const [backgroundImage, setBackgroundImage] = useState('');

      useEffect(() => {
        const handleResize = () => {
          // Sprawdź szerokość ekranu
          const screenWidth = window.innerWidth;
          // Wybierz odpowiedni obraz w zależności od szerokości ekranu
          const imageUrl = screenWidth <= 425 ?
            data.technology.find((technology) => technology.name === selectedPlanet)?.images?.landscape || '' :
            data.technology.find((technology) => technology.name === selectedPlanet)?.images?.portrait || '';
    
          setBackgroundImage(`url(${imageUrl})`);
        };
    
        // Wywołaj funkcję obsługi zmiany rozmiaru ekranu po załadowaniu komponentu
        handleResize();
    
        // Dodaj nasłuchiwanie zmiany rozmiaru okna
        window.addEventListener('resize', handleResize);
    
        // Zdejmij nasłuchiwanie zmiany rozmiaru okna po odmontowaniu komponentu
        return () => window.removeEventListener('resize', handleResize);
      }, [selectedPlanet]); // Nasłuchuj zmiany wybranej planety
    

    return (
    <div className="content-technology">
    <div>
    <div  className="title-page">
        <p className='meet-your-creew'><span>03</span> SPACE LAUNCH 101</p>
    </div>
    <div className="tech-info">

      
      
      {selectedPlanet && (
        <motion.div
          className='text-tech'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {data.technology.map((technology, i) =>
            technology.name === selectedPlanet ? (
              <div className='tech-description' key={i}>
                <p>The terminology...</p>
                <p>{technology.name}</p>
                <p>{technology.description}</p>
              </div>
            ) : null
          )}
        </motion.div>
      )}

    <div className='tech-choose'>
        {data.technology.map((technology, i) => (
          <motion.div
          className={`dots-choose-tech ${technology.name === selectedPlanet ? 'active' : ''}`}
          key={i}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            onClick={() => handlePlanetClick(technology.name)}
          >
            <span className=''>
                {i+1}
            </span>
          </motion.div>
        ))}
      </div>
    
    </div>
    </div>


    <div className="choose-tech">
    <p className='meet-your-for-mobile'><span>03</span> MEET YOUR CREW</p>

      {selectedPlanet && (
        <motion.div
          key={selectedPlanet}  // Dodaj klucz do zapewnienia unikalności
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: 'contain', // Dopasowuje tło do rozmiaru kontenera
            backgroundRepeat: 'no-repeat', // Zapobiega powtarzaniu tła
            backgroundPosition: 'center',
            /* Pozostałe style */
            width: '100%', // Ustaw szerokość na 100% lub inaczej, w zależności od potrzeb
            height: '100%' // Ustaw wysokość na wartość, która Ci odpowiada
          }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <img
            className='machine'
            src={
              data.technology.find(
                (technology) => technology.name === selectedPlanet
              )?.images?.portrait || ''
            }
            alt="Selected tech"
          /> */}
        </motion.div>
      )}
    </div>
  </div>
    )
}

export default ContentTechnology