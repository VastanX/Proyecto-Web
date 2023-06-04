import  React from 'react';
import { Link } from "react-router-dom";

class Cabecera extends React.Component{
    render() {
        return(
        <div class="container">
        <div class="row">
            <div class="col">
            <div class="cabecera">
                <Link to="/"><button >Volver al inicio</button></Link>
            </div>
            </div>
            <div class="col">
                <ul>
                <Link to="/info">
                    <button>Información</button>
                </Link> 
                </ul>
            </div>
            <div class="col">
            <ul>
                <Link to="/contacto">
                <button>Contacto</button>
                </Link>
            </ul>
            </div>
            <div class="col">
            <ul>
                <Link to="/login">
                    <button>Iniciar sesión</button>
                </Link> 
            </ul>
            </div>
            <div class="col">
            <ul>
                <Link to="/registro">
                <button>Registrarse</button>
                </Link>   
            </ul>
            </div>
        </div>
        </div>
        );
    }
}

export default Cabecera;