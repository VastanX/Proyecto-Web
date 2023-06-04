import React from 'react';
import c2 from '../fotos de cuentos/c2.png';
import c3 from '../fotos de cuentos/c3.png';
import { Link } from 'react-router-dom';


class Recomendaciones extends React.Component {
    render(){
        return(
            <div className="container">
                <p style={{ color: 'aliceblue' }} className="recomendaciones">Recomendaciones</p>
         
                <div className="col">
                    <Link to="/cuento2"><img height="300px" src={c2} alt="recomendacion1"></img></Link>
                    <Link to="/cuento3"><img height="300px" src={c3} alt="recomendacion2"></img></Link>
                </div>
                <div className="col">
                    <Link to={"/Reporte"}><button style={{ color: 'crimson' }}>Reportar error</button></Link>
                </div>

            </div>
        )
    }
}

export default Recomendaciones;