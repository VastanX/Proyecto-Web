import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Cabecera from './Cabecera';

import LinesChart from "./Grafico";

function App() {
    return (
        <div>
            {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}
            <h1 className="centrado" style={{ color: "white", backgroundColor: "wheat", fontSize: "70px"}}>Estadísticas</h1>

            <Cabecera />
           
            <p className="centrado" style={{ color: "white", fontSize: "40px", paddingTop: "90px"}}> Número de páginas por cuento </p>
            <div>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"600px", height:"250px"}}>
                    <LinesChart />
                </div>
            </div>
        </div>
    );
}

export default App;