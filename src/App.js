import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import CadastroVenda from './components/CadastroVenda';
import CadastroProduto from './components/CadastroProduto';
import CadastroVendedor from './components/CadastroVendedor';
import Venda from './components/Venda';

const App = () => {
    return (
      <BrowserRouter>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar-venda" element={<CadastroVenda />} />
            <Route path="/cadastrar-produto" element={<CadastroProduto />} />
            <Route path="/cadastrar-produto/:id" element={<CadastroProduto />} />
            <Route path="/cadastrar-venda/:id" element={<CadastroVenda />} />
            <Route path="/cadastrar-vendedor" element={<CadastroVendedor />} />
            <Route path="/lista-venda" element={<Venda />} />
        </Routes>
    </BrowserRouter>
    );
  };
export default App;
