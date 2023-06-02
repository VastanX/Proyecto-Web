
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Cuento1 from './paginas/cuento1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuento1" element={<Cuento1 />} />
        <Route path="/Home.js" element={<Home />} />

      
      </Routes>
    </Router>
  );
}

export default App;
