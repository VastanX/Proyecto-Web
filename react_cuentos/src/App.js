
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Cuento1 from './paginas/cuento1';
import Cuento2 from './paginas/cuento2';
import Cuento3 from './paginas/cuento3';
import Cuento4 from './paginas/cuento4';
import Cuento5 from './paginas/cuento5';
import Cuento6 from './paginas/cuento6';
import Cuento7 from './paginas/cuento7';
import Cuento8 from './paginas/cuento8';
import Cuento9 from './paginas/cuento9';
import Cuento10 from './paginas/cuento10';
import LeerAhora from './paginas/LeerAhora';
import Info from './paginas/info';
import Contacto from './paginas/contacto';
import Login from './paginas/login';
import Registro from './paginas/registro';
import Reporte from './paginas/Reporte';
import Lista from './paginas/listaPersonas';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuento1" element={<Cuento1 />} />
        <Route path="/cuento2" element={<Cuento2 />}/>
        <Route path="/cuento3" element={<Cuento3 />}/>
        <Route path="/cuento4" element={<Cuento4 />}/>
        <Route path="/cuento5" element={<Cuento5 />}/>
        <Route path="/cuento6" element={<Cuento6 />}/>
        <Route path="/cuento7" element={<Cuento7 />}/>
        <Route path="/cuento8" element={<Cuento8 />}/>
        <Route path="/cuento9" element={<Cuento9 />}/>
        <Route path="/cuento10" element={<Cuento10 />}/>
        <Route path="/Home.js" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registro" element={<Registro />}/>
        <Route path="/reporte" element={<Reporte />}/>
        <Route path="/LeerAhora" element={<LeerAhora />}/>
        <Route path="/lista" element={<Lista />}/>
        
        
{/* estas son las rutas para comunicarte entre paginas */}
      
      </Routes>
    </Router>
  );

}

export default App;
