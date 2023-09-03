import React, { useState } from 'react';
import LegalNotice from './legalNotice'; 

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    loantype:'',
    emi:'',
    dod:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const userData = {
      name: formData.name,
      address: formData.address,
      loantype:formData.loantype,
      emi:formData.emi,
      dod:formData.dod,
    };

    fetch('http://localhost:7777/legalnotices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data stored in the local database:', data);
        return <LegalNotice formData={formData} />;
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div>
          <label>Loan Type:</label>
          <input type="text" name="loanType" value={formData.loantype} onChange={handleInputChange} />
        </div>
        <div>
          <label>EMI Amount</label>
          <input type="text" name="emi" value={formData.emi} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date of Default:(DD/MM/YYYY)</label>
          <input type="text" name="dateofdefault" value={formData.dod} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
