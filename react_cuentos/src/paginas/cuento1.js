import React from 'react';
import c1 from '../fotos de cuentos/c1.png';
import c2 from '../fotos de cuentos/c2.png';
import c3 from '../fotos de cuentos/c3.png';
import "../App.css";
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera';

// importa las demás imágenes según sea necesario

function Cuento1() {
  return (
    <div>

      {<Cabecera />}

      <center>
        <p style={{ fontSize: '70px' }}>Caperucita roja</p>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <img src={c1} alt="" className="portadas" />
            </div>
            <div className="row">
              <div className="col">
                <div className="boton">
                  <a href="Lectura1.html"><button>Leer ahora</button></a>
                  <button>Ver estadisticas</button>
                  <a href="milista.html"><button>Añadir a mi lista</button></a>
                  <a href="calificacion.html"><button>Calificar libro</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>

      <div className="container">
        <p style={{ color: 'aliceblue' }} className="recomendaciones">Recomendaciones</p>
        <div className="row">
          <div className="col">
            <a href="cuento2.html"><img height="300px" src={c2} alt="" /></a>
            <a href="cuento3.html"><img height="300px" src={c3} alt="" /></a>
          </div>
          <div className="col">
            <Link to="/Reporte"><button style={{ color: 'crimson' }}>Reportar error</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuento1;