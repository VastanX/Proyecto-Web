
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Cuento1 from './paginas/cuento1';
import Info from './paginas/info';
import Contacto from './paginas/contacto';
import Login from './paginas/login';
import Registro from './paginas/registro';
import Reporte from './paginas/Reporte';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuento1" element={<Cuento1 />} />
        <Route path="/Home.js" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="/reporte" element={<Reporte />}/>
        
        
{/* estas son las rutas para comunicarte entre paginas */}
      
      </Routes>
    </Router>
  );

}

export default App;
