import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { login } from './Auth';
import { useNavigate } from 'react-router-dom';
import './loginauth.css'; // Import the CSS here

const LoginAuth = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [success, setsucess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      console.log('Login successful, token:', token);
      alert('Login successful');
      setusername('');
      setpassword('');
      setsucess('Successfully Logged In');
      seterror('');
      navigate("/Home");
    } catch (err) {
      console.log('Login Error', err);
      seterror('Login Failed');
      setsucess('');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
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

        <button type='submit'>Login</button>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p class="newuser mt-3">New User ? <Link className="" to="/register">Register</Link></p>  
        
      </form>
    </div>
  );
};

export default LoginAuth;
