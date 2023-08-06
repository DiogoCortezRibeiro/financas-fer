import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const CadastroVenda = () => {
  const [listProduct, setListProduct] = useState([]);
  const [listSeller, setListSeller] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(process.env.REACT_APP_BASE_URL + `/api/sale/${id}`)
      .then(res => {
        setQuantity(res.data.quantity);
        setSelectedProduct(res.data.product);
        setSelectedSeller(res.data.seller);
      })
    }
  }, [id]);

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

  const handleProductChange = (selectedOption) => {
    setSelectedProduct(selectedOption);
  };

  const handleSellerChange = (selectedOption) => {
    setSelectedSeller(selectedOption);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
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

  const saveSale = async () => {  
    try {
      if (!saleIsValidade()) {
        return;
      }
      await axios.post(process.env.REACT_APP_BASE_URL + '/api/sale', mountToJson(), {headers: {'Content-Type': 'application/json'}})
      toast.success('Venda cadastrada com sucesso!');
      clear();
    } catch(error) {
      toast.warn('Estoque do produto insuficiente!');
    }
  }

  const saleIsValidade = () => {
    if (!quantity) {
      toast.info('Campo quantidade está vazio!');
      return false;
    }
    if (!selectedProduct) {
      toast.info('Precisa informar um produto!');
      return false;
    }
    if (!selectedSeller) {
      toast.info('Precisa informar um vendedor!');
      return false;
    }
    return true;
  }

  const mountToJson = () => {
    if (id) {
      return {
        id: id,
        quantity: Number(quantity),
        product: selectedProduct, 
        seller: selectedSeller
      };
    }

    return {
      quantity: Number(quantity),
      product: selectedProduct, 
      seller: selectedSeller
    };
  }

  const clear = () => {
    setQuantity('');
    setSelectedProduct(null);
    setSelectedSeller(null);
  }

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
            onChange={handleProductChange}
            value={selectedProduct}
            placeholder="Escolha o produto"
          />
        </div>
        <div className="input-field col s6">
          <Select
            options={listSeller}
            getOptionLabel={getOptionLabel}
            isSearchable={true}
            styles={customStyles}
            onChange={handleSellerChange}
            value={selectedSeller}
            placeholder="Escolha o produto"
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="quantidade" type="number" value={quantity} onChange={handleChangeQuantity} />
          <label className={quantity ? 'active' : ''}>Quantidade</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" onClick={saveSale}>
        Cadastrar
        <i className="material-icons right">send</i>
      </button>
    </div>
  </div>
  );
};

export default CadastroVenda;