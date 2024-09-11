import React from 'react';
import Home from './componentes/home.js'; // Importando o componente Home

const App = () => {
  return (
    <div>
      <Home /> {/* Renderizando o componente Home, que já inclui a Navbar */}
    </div>
  );
};

export default App;
