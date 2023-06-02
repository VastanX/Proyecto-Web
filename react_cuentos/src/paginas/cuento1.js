import React from 'react';
import c1 from '../fotos de cuentos/c1.png';
import c2 from '../fotos de cuentos/c2.png';
import c3 from '../fotos de cuentos/c3.png';
import "../App.css";
import { Link } from 'react-router-dom';

// importa las demás imágenes según sea necesario

function Cuento1() {
  return (
    <div>
      <div className="container">
        <div className="col-sm-4">
        <Link to="/"><button >Volver al inicio</button></Link>
        </div>
        <div className="col-sm-4">
          <a href="info.html"><button>Información</button></a>
          <a href="login.html"><button>Iniciar sesión</button></a>
          <a href="contacto.html"><button>Contacto</button></a>
          <a href="registro.html"><button>Registrarse</button></a>
        </div>
      </div>

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
            <a href="reporte.html"><button style={{ color: 'crimson' }}>Reportar error</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuento1;