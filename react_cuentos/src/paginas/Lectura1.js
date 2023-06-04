import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import c1 from '../Cuentos 1 fotos/C1.jpg';
import c2 from '../Cuentos 1 fotos/c2.jpg';
import c3 from '../Cuentos 1 fotos/c3.jpg';
import c4 from '../Cuentos 1 fotos/c4.jpg';
import c5 from '../Cuentos 1 fotos/c5.jpg';

function Lectura() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="c1" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c2} className="c1" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="c1" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c4} className="c1" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c5} className="c1" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Link to={"/cuento1"}>
        <button style={{ marginTop: '5px' }}>Portada</button>
      </Link>
    </div>
  );
}

export default Lectura;
