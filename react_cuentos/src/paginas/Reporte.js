import React from 'react';
import "../App.css";
import Formulario from './Formulario-reporte';
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera';

function Reporte() {
    return(
    <>
    {<Cabecera />}

    {<Formulario />}
    </>
    );
}

export default Reporte;