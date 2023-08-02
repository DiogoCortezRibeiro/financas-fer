import React from 'react';

const CadastroProduto = () => {
  return (
    <div className="container">
    <h5 className="header margin-bottom-2">Cadastro de produto</h5>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="produto" type="text" className="validate" />
          <label>Nome produto</label>
        </div>
        <div className="input-field col s3">
          <input id="medida" type="text" className="validate" />
          <label>Medida</label>
        </div>
        <div className="input-field col s3">
          <input id="quantidade" type="text" className="validate" />
          <label>Quantidade</label>
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

export default CadastroProduto;