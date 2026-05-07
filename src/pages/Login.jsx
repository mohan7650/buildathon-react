// src/pages/Login.jsx

import React, { useState } from "react";
import "./Auth.css";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-left">
          <h1>Buildathon</h1>
          <p>
            Join the next generation of builders, founders, and AI innovators.
          </p>

          <div className="switch-tabs">
            <button
              className={!isRegister ? "active" : ""}
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>

            <button
              className={isRegister ? "active" : ""}
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </div>
        </div>

        <div className="auth-right">

          {!isRegister ? (
            <form className="auth-form">
              <h2>Welcome Back</h2>

              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />

              <button type="submit" className="auth-btn">
                Login
              </button>

              <p className="bottom-text">
                Don’t have an account?
                <span onClick={() => setIsRegister(true)}>
                  {" "}Register
                </span>
              </p>
            </form>
          ) : (
            <form className="auth-form">
              <h2>Create Account</h2>

              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />

              <button type="submit" className="auth-btn">
                Create Account
              </button>

              <p className="bottom-text">
                Already have an account?
                <span onClick={() => setIsRegister(false)}>
                  {" "}Login
                </span>
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default Login;