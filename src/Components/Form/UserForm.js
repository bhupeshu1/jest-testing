import React, { useState } from 'react'
import './style.css'

const UserForm = ({ onUserAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = formData;
    onUserAdd([{ name, email }]);
    setFormData({ name: '', email: '' });

  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  return (
    <div className='form'>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default UserForm