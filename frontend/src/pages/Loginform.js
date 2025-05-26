import React from 'react';
import './Loginform.css';

const Loginform = () => {
  return (
    // <div className="login-container">
    //   <form className="login-box">
    //     <h2>Login</h2>

    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       id="username"
    //       name="username"
    //       placeholder="Enter your username"
    //     />

    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       placeholder="Enter your password"
    //     />

    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       placeholder="Enter your email"
    //     />

    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <div>
      <div class="container bv mb-5 ">
    <div class="left-panel">
      <img src="watch.jpg" alt="Titan Watch" />
    </div>
    <div class="right-panel">
      <h2><span class="highlight">Hurry Up</span></h2>
      <p class="subtitle">Sign Up Now for a chance to win a</p>
      <p class="main-title">Free Watch <span class="exclaim">!</span></p>

      <form>
        <input type="text" placeholder="Full Name*" required />
        <input type="tel" placeholder="Mobile Number*" required />
        <input type="email" placeholder="Email Address*" required />
        <button type="submit">SUBMIT</button>
        <p class="terms">
          By continuing, I agree with Titan’s <a href="#">Terms Of Use</a> and <a href="#">Privacy Policies</a>
        </p>
      </form>
    </div>
  </div>
    </div>
  );
};

export default Loginform;
