import './App.css'
import Nav from './components/Nav/Nav.jsx';
import { Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './ThemeContext.jsx';
import Home from './views/Home/Home.jsx';
import Contacto from './views/Contacto/Contacto.jsx';
import Nosotros from './views/Nosotros/Nosotros.jsx';
import Servicios from './views/Servicios/Servicios.jsx';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };  

  return (
    
    <div className={`container ${theme === 'dark' ? 'darkTheme' : 'lightTheme'}`}>
      <Nav toggleTheme={toggleTheme} />
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
