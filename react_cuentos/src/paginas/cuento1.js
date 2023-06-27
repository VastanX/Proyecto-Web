import React from 'react';
import c1 from '../fotos de cuentos/c1.png';
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
          <p style={{ fontSize: '70px', color: "white"}}>Caperucita roja</p>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <img src={c1} alt="" height={ "500px" } className="portadas" />
              </div>
              <div className="row">
                <div className="col">
                  <div className="boton">
                    <Link to={"/LeerAhora"}><button>Leer ahora</button></Link>
                    <Link to={"/Estadisticas"}><button>Ver estadisticas</button></Link>
                    <Link to={'/miLista'}><button>Añadir a mi lista</button></Link>
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