import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const CadastroProduto = () => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [measure, setMeasure] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(process.env.REACT_APP_BASE_URL + `/api/product/${id}`)
      .then(res => {
        setName(res.data.name);
        setQuantity(res.data.quantity);
        setMeasure(res.data.measure);
      })
    }
  }, [id]);


  const saveProduct = async () => {  
    try {
      if (!productIsValidate()) {
        return;
      }

      console.log(mountToJson())

      await axios.post(process.env.REACT_APP_BASE_URL + '/api/product', mountToJson(), {headers: {'Content-Type': 'application/json'}})
      toast.success('Produto cadastrado com sucesso!');
      clear();
    } catch(error) {
      toast.warn('Erro ao cadastrar produto');
    }
  }

  const mountToJson = () => {
    if (id) {
      return {
        id: id,
        name: name, 
        measure: measure,
        quantity: Number(quantity)
      };
    }

    return {
      name: name, 
      measure: measure,
      quantity: Number(quantity)
    };
  }

  const clear = () => {
    setMeasure('');
    setName('');
    setQuantity(null);
  }

  const productIsValidate = () => {
    if (!name) {
      toast.info('Campo nome está vazio!');
      return false;
    }
    if (!quantity) {
      toast.info('Campo quantidade está vazio!');
      return false;
    }
    if (!measure) {
      toast.info('Campo medida está vazio!');
      return false;
    }
    return true;
  }

  const handleChangeName = event => {
    setName(event.target.value);
  }

  const handleChangeQuantity = event => {
    setQuantity(event.target.value);
  }

  const handleChangeMeasure= event => {
    setMeasure(event.target.value);
  }

  return (
    <div className="container">
      <h5 className="header margin-bottom-2">Cadastro de produto</h5>
      <div className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input type="text" value={name} onChange={handleChangeName} />
            <label className={name ? 'active' : ''}>Nome produto</label>
          </div>
          <div className="input-field col s3">
            <input type="text" value={measure} onChange={handleChangeMeasure} />
            <label className={measure ? 'active' : ''}>Medida</label>
          </div>
          <div className="input-field col s3">
            <input type="number" value={quantity} onChange={handleChangeQuantity} />
            <label className={quantity ? 'active' : ''}>Quantidade</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" onClick={saveProduct}>
          Cadastrar
          <i className="material-icons right">send</i>
        </button>
      </div>
  </div>
  );
};

export default CadastroProduto;