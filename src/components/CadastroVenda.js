import React from 'react';

const CadastroVenda = () => {
  return (
    <div className="container">
    <h5 className="header margin-bottom-2">Cadastro de venda</h5>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <select>
            <option value="" disabled selected>Escolha o produto</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="input-field col s6">
          <select>
            <option value="" disabled selected>Escolha o vendedor</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="medida" type="text" className="validate" />
          <label>Medida</label>
        </div>
        <div className="input-field col s6">
          <input id="quantidade" className="validate" />
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

export default CadastroVenda;