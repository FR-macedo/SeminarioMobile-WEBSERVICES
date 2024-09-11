import React from 'react';
import Navbar from './navbar.js'; // Importando o componente Navbar

import Cards from './cards.js';
const Home = () => {
  return (
    <div>
      <Navbar /> {/* Navbar aparece no topo da página */}
      <main>
        <h1>Bem-vindo à nossa Loja Online!</h1>
        <p>Explore nossos produtos e aproveite as ofertas!</p>
      </main>
      
      <Cards></Cards>

    </div>
  );
};

export default Home;
