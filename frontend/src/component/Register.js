import React, { useState } from 'react';
import { register } from './Auth';
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [success, setsucess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      setsucess('Registered Successfully');
      seterror('');
      navigate("/login");
    } catch (err) {
      console.log("Registration Error", err);
      seterror("Registration Failed");
      setsucess('');
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="register-form">
        <label>UserName</label>
        <input
          type='text'
          name='name'
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type='submit'>Register</button>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p class="newuser mt-3">Existing User ? <Link className="" to="/login">Login</Link></p>  

      </form>
    </div>
  );
};

export default Register;
