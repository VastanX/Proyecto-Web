import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import c1 from '../Cuentos 4 fotos/c1.png';
import c2 from '../Cuentos 4 fotos/c2.png';


function Lectura() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [c1, c2];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel">
          <img src={images[currentSlide]} alt="Slide" />
        </div>

        <div className="carousel-controls">
          <button className="carousel-control-prev" onClick={prevSlide}>
            Anterior
          </button>
        <button className="carousel-control-next" onClick={nextSlide}>
            Siguiente
          </button>
        </div>
      </div>
      <div className='centrado'>
        <Link to="/cuento4">
          <button style={{ marginTop: '5px' }}>Portada</button>
        </Link>
      </div>
      
    </div>
    
  );
}

export default Lectura;
