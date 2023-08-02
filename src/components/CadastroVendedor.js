import React from 'react';

const CadastroVendedor = () => {
  return (
    <div className="container">
    <h5 className="header margin-bottom-2">Cadastro de vendedor</h5>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="vendedor" type="text" className="validate" />
          <label>Nome do vendedor</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">
        Cadastrar
        <i className="material-icons right">send</i>
      </button>
    </form>
  </div>
  );
};

export default CadastroVendedor;