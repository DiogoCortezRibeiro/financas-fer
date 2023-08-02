import React, { useEffect } from 'react';
import M from 'materialize-css';
import '../style/app.css'

const Navbar = () => {
  useEffect(() => {
    // Initialize Materialize JS components
    M.AutoInit();
  }, []);

  return (
    <nav>
      <div className="nav-wrapper blue darken-2">
        <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="hide-on-med-and-down center display-center ">
          <li><a href="/">Lista de produtos</a></li>
          <li><a href="/lista-venda">Lista de vendas</a></li>
          <li><a href="/cadastrar-venda">Cadastrar venda</a></li>
          <li><a href="/cadastrar-produto">Cadastrar produto</a></li>
          <li><a href="/cadastrar-vendedor">Cadastrar vendedor</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;