import React from 'react';
import './navbar.css'; // Arquivo CSS para estilizar a Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Loja Online</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">login</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
        <li>
          <a href="/carrinho">Carrinho</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
