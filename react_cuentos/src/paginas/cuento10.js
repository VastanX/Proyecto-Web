import React from 'react';
import c10 from '../fotos de cuentos/c10.png';
import Recomendaciones from './Recomendaciones';
import "../App.css";
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera';

// importa las demás imágenes según sea necesario

function Cuento() {
  return (
    <div>

      {<Cabecera />}

      <div>
        <center>
          <p style={{ fontSize: '70px' }}>El gato ensombrerado</p>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <img src={c10} alt="" height={"500px"} className="portadas" />
              </div>
              <div className="row">
                <div className="col">
                  <div className="boton">
                    <Link to={"/LeerAhora"}><button>Leer ahora</button></Link>
                    <button>Ver estadisticas</button>
                    <a href="milista.html"><button>Añadir a mi lista</button></a>
                    <Link to={'/calificacion'}><button>Calificar libro</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>

        <Recomendaciones />

      </div>
    </div> 
  );
}

export default Cuento;