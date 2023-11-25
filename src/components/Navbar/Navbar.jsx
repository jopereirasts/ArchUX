import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/ux">User Experience</Link>
      <Link to="/ai">Arquitetura da Informação</Link>
      <Link to="/garrett">Planos de Garrett</Link>
      <Link to="/heuristicas">Heurísticas</Link>
      <Link to="/tecnicas">Técnicas</Link>
      <Link to="/about">Sobre Nós</Link>
    </nav>
  );
}

export default Navbar;