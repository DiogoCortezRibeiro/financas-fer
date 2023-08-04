import React, { useEffect, useState } from 'react';
import '../style/app.css'
import axios from 'axios';

const Venda = () => {
  const [listSeller, setListSeller] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    return () => {
      axios.get(process.env.REACT_APP_BASE_URL + '/api/seller')
        .then(res => {
          setListSeller(res.data);
        })
    }
  }, []);

  const filteredData = listSeller.filter((item) =>
    item.name.toLowerCase().includes(filterText)
  );

  return (
    <div className="container">
      <h5 className="header margin-bottom-2">Lista de vendas</h5>
      <table className="highlight responsive-table bordered ">
        <thead>
          <tr>
            <th className="width60">Nome</th>
            <th className="width40 align-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((seller) => (
            <tr>
              <td>{seller.name}</td>
              <td className="align-center">
                <div>
                  <button className="btn waves-effect waves-light margin-right-2" type="submit" name="action">
                    <i class="small material-icons">edit</i>
                  </button>
                  <button className="btn waves-effect waves-light red margin-left-2" type="submit" name="action">
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