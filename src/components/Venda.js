import React, { useEffect, useState } from 'react';
import '../style/app.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Venda = () => {
  const [listSale, setListSale] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    return () => {
      getListSale();
    }
  }, []);

  const getListSale = () => {
    axios.get(process.env.REACT_APP_BASE_URL + '/api/sale')
        .then(res => {
          setListSale(res.data);
        })
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const filteredData = listSale.filter((item) =>
    item.product.name.toLowerCase().includes(filterText) ||
    item.seller.name.toLowerCase().includes(filterText) 
  );

  const deleteSale = (id) => {
    axios.delete(process.env.REACT_APP_BASE_URL + '/api/sale/' + Number(id))
      .then(res => {
        toast.success('Venda deletada com sucesso');
        getListSale();
      })
  }

  return (
    <div className="container">
      <h5 className="header margin-bottom-2">Lista de vendas</h5>
      <input
        type="text"
        placeholder="Pesquisar vendas..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <table className="highlight responsive-table bordered ">
        <thead>
          <tr>
            <th className="width60">Produto</th>
            <th className="width60">Quantidade</th>
            <th className="width60">Vendedor</th>
            <th className="align-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((sale) => (
            <tr>
              <td>{sale.product.name}</td>
              <td>{sale.quantity}</td>
              <td>{sale.seller.name}</td>
              <td className="align-center">
                <div>
                  <Link to={`/cadastrar-venda/${sale.id}`}>
                    <button className="btn waves-effect waves-light margin-right-2" type="submit" name="action">
                      <i class="small material-icons">edit</i>
                    </button>
                  </Link>
                  <button onClick={()=> deleteSale(sale.id)} className="btn waves-effect waves-light red margin-left-2" type="submit" name="action">
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

export default Venda;