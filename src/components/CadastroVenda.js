import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const CadastroVenda = () => {
  const [listProduct, setListProduct] = useState([]);
  const [listSeller, setListSeller] = useState([]);

  useEffect(() => {
    return () => {
      getAllProducts();
      getAllSellers();
    }
  }, []);

  const getAllProducts = () => {
    axios.get(process.env.REACT_APP_BASE_URL + '/api/product')
      .then(res => {
        setListProduct(res.data);
      });
  }

  const getAllSellers = () => {
    axios.get(process.env.REACT_APP_BASE_URL + '/api/seller')
    .then(res => {
      setListSeller(res.data);
    });
  }

  const getOptionLabel = (option) => option.name;

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: '#ccc',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#ccc', 
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'white' : 'white', 
      color: state.isSelected ? 'black' : 'inherit', 
    }),
  };

  return (
    <div className="container">
    <h5 className="header margin-bottom-2">Cadastro de venda</h5>
    <div className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <Select
            options={listProduct}
            getOptionLabel={getOptionLabel}
            isSearchable={true}
            styles={customStyles}
            placeholder="Escolha o produto"
          />
        </div>
        <div className="input-field col s6">
          <Select
            options={listSeller}
            getOptionLabel={getOptionLabel}
            isSearchable={true}
            styles={customStyles}
            placeholder="Escolha o produto"
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="medida" type="text"/>
          <label>Medida</label>
        </div>
        <div className="input-field col s6">
          <input id="quantidade" type="text" />
          <label>Quantidade</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">
        Cadastrar
        <i className="material-icons right">send</i>
      </button>
    </div>
  </div>
  );
};

export default CadastroVenda;