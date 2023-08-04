import React, { useState, useEffect  } from 'react';
import '../style/app.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [filterText, setFilterText] = useState('');
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    return () => {
      axios.get(process.env.REACT_APP_BASE_URL + '/api/product')
        .then(res => {
          setListProduct(res.data);
        })
    }
  }, []);

  const handleNotification = () => {
    toast.success('Produto deletado com sucesso');
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const filteredData = listProduct.filter((item) =>
    item.name.toLowerCase().includes(filterText) ||
    item.measure.toString().includes(filterText) ||
    item.quantity.toLowerCase().includes(filterText)
  );
  
  return (
    <div className="container">
      <h5 className="header margin-bottom-2">Lista de produto</h5>
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <table className="highlight responsive-table bordered ">
        <thead>
          <tr>
            <th className="width40">Nome</th>
            <th className="width20">Medida</th>
            <th className="width20">Em estoque</th>
            <th className="width20 align-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((product) => (
            <tr key={product.email}>
              <td>{product.name}</td>
              <td>{product.measure}</td>
              <td>{product.quantity}</td>
              <td className="align-center">
                <div>
                  <Link to={`/cadastrar-produto/${product.id}`}>
                    <button className="btn waves-effect waves-light margin-right-2" type="submit" name="action">
                      <i class="small material-icons">edit</i>
                    </button>
                  </Link>
                  <button onClick={handleNotification} className="btn waves-effect waves-light red margin-left-2" type="submit" name="action">
                    <i className="small material-icons">delete</i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;