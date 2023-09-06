import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); 

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
        // ReactDOM.render(<LegalNotice formData={formData} />, document.getElementById('root'));
        // <LegalNotice formData={formData} />
        navigate('/legalnotice', { state: { formData } });
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
          <input type="text" name="loantype" value={formData.loantype} onChange={handleInputChange} />
        </div>
        <div>
          <label>EMI Amount</label>
          <input type="number" name="emi" value={formData.emi} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date of Default:(DD/MM/YYYY)</label>
          <input type="date" name="dod" value={formData.dod} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
