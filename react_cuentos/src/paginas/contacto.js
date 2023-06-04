import React from 'react';
import "../App.css";
import Formulario from './Formulario-contacto';
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera';

function Contacto() {
    return(
    <>

    {<Cabecera />}
        
    {<Formulario />}

    <div className="col">
        <Link to="/Reporte"><button style={{ color: 'crimson' }}>Reportar error</button></Link>
    </div>

    </>
    );
}

export default Contacto;