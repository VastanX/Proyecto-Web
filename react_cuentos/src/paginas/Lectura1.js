import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import c1 from '../Cuentos 1 fotos/C1.jpg';
import c2 from '../Cuentos 1 fotos/c2.jpg';
import c3 from '../Cuentos 1 fotos/c3.jpg';
import c4 from '../Cuentos 1 fotos/c4.jpg';
import c5 from '../Cuentos 1 fotos/c5.jpg';

function Lectura() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [c1, c2, c3, c4, c5];

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
        <Link to="/cuento1">
          <button style={{ marginTop: '5px' }}>Portada</button>
        </Link>
      </div>
      
    </div>
    
  );
}

export default Lectura;
