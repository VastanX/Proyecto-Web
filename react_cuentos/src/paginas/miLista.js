import React from 'react';
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera';

const MiLista = () => {
  return (
    <>
      
      <Cabecera />

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '200px' }} id="toc_container">
          <p className="info">Cuentos por leer</p>
          <ul className="toc_list" style={{ fontSize: '30px' }}>
            <li>
              <Link to="/cuento1">1 La caperucita roja</Link>
            </li>
            <li>
              <Link to="/cuento5">2 Hansel y Gretel</Link>
            </li>
            <li>
              <Link to="/cuento7">3 Pinocho</Link>
            </li>
          </ul>
        </div>

        <div id="toc_container">
          <p className="info">Cuentos ya leídos</p>
          <ul className="toc_list" style={{ fontSize: '30px' }}>
            <li>
              <Link to="/cuento2">1 El gato con botas</Link>
            </li>
            <li>
              <Link to="/cuento10">2 El gato ensombrerado</Link>
            </li>
            <li>
              <Link to="/cuento9">3 El soldadito de plomo</Link>
            </li>
            <li>
              <Link to="/cuento4">4 El patito feo</Link>
            </li>
          </ul>
        </div>
      </div>

        <div className="col">
            <Link to="/Reporte"><button style={{ color: 'crimson' }}>Reportar error</button></Link>
        </div>
    </>
  );
};

export default MiLista;
