import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div className='barDivisor'></div>
      <Link to="/ux">User Experience</Link>
      <div className='barDivisor'></div>
      <Link to="/ai">Arquitetura da Informação</Link>
      <div className='barDivisor'></div>
      <Link to="/garrett">Planos de Garrett</Link>
      <div className='barDivisor'></div>
      <Link to="/heuristicas">Heurísticas</Link>
      <div className='barDivisor'></div>
      <Link to="/tecnicas">Técnicas</Link>
      <div className='barDivisor'></div>
      <Link to="/about">Sobre Nós</Link>
    </nav>
  );
}

export default Navbar;