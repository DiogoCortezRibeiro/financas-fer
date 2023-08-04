import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CadastroVendedor = () => {
  const [name, setName] = useState();

  const saveSeller = async () => {  
    try {
      if (!name) {
        toast.info('Nome do vendedor vazio!');
        return;
      }
      await axios.post(process.env.REACT_APP_BASE_URL + '/api/seller', name, {headers: {'Content-Type': 'application/json'}})
      toast.success('Vendedor cadastrado com sucesso!');
      setName('');
    } catch(error) {
      toast.warn('Erro ao cadastrar vendedor');
    }
  }

  const handleChangeName = event => {
    setName(event.target.value);
  }

  return (
    <div className="container">
    <h5 className="header margin-bottom-2">Cadastro de vendedor</h5>
    <div className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input type="text" value={name} onChange={handleChangeName} />
          <label>Nome do vendedor</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" onClick={saveSeller}>
        Cadastrar
        <i className="material-icons right">send</i>
      </button>
    </div>
  </div>
  );
};

export default CadastroVendedor;