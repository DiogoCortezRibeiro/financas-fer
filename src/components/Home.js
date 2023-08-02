import React, { useState } from 'react';
import '../style/app.css'
import { toast } from 'react-toastify';

const Home = () => {
  const [filterText, setFilterText] = useState('');
  const data = [
    // Your data here
  ];

  const handleNotification = () => {
    toast.success('Produto deletado com sucesso');
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterText) ||
    item.age.toString().includes(filterText) ||
    item.email.toLowerCase().includes(filterText)
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
          <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>jane.smith@example.com</td>
            <td className="align-center">
              <div>
                <button className="btn waves-effect waves-light margin-right-2" type="submit" name="action">
                  <i class="small material-icons">edit</i>
                </button>
                <button onClick={handleNotification} className="btn waves-effect waves-light red margin-left-2" type="submit" name="action">
                  <i className="small material-icons">delete</i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;