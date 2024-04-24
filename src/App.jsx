import Nav from './components/Nav/Nav.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Contacto from './views/Contacto/Contacto.jsx';
import Nosotros from './views/Nosotros/Nosotros.jsx';
import Servicios from './views/Servicios/Servicios.jsx';

function App() {

  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  )
}

export default App
