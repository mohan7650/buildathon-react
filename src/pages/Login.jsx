// src/pages/Login.jsx

import React, { useState } from "react";
import "./Auth.css";

import { signInWithGoogle } from "../lib/firebase";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* ── Left side ── */}
        <div className="auth-left">
          <div className="left-content">

            <h1>Buildathon</h1>

            <p>
              Join the next generation of builders,
              founders, and AI innovators.
            </p>

            <div className="switch-tabs">
              <button
                type="button"
                className={!isRegister ? "active" : ""}
                onClick={() => setIsRegister(false)}
              >
                Login
              </button>

              <button
                type="button"
                className={isRegister ? "active" : ""}
                onClick={() => setIsRegister(true)}
              >
                Register
              </button>
            </div>

          </div>
        </div>

        {/* ── Right side ── */}
        <div className="auth-right">

          {!isRegister ? (

            /* ── Login form ── */
            <form className="auth-form" noValidate>

              <h2>Welcome Back</h2>

              <p className="auth-subtitle">
                Sign in to your Buildathon account
              </p>

              <div className="field-group">
                <label htmlFor="login-email">Email Address *</label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="login-password">Password *</label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button type="button" className="forgot-btn">
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="auth-btn">
                SIGN IN
              </button>

              <div className="divider" aria-hidden="true">
                <span />
                <p>OR</p>
                <span />
              </div>

              <button
                type="button"
                className="google-btn"
                onClick={signInWithGoogle}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  width="16"
                  height="16"
                />
                <span>SIGN IN WITH GOOGLE</span>
              </button>

              <p className="bottom-text">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="switch-link"
                  onClick={() => setIsRegister(true)}
                >
                  Create one
                </button>
              </p>

            </form>

          ) : (

            /* ── Register form ── */
            <form className="auth-form" noValidate>

              <h2>Create Account</h2>

              <p className="auth-subtitle">
                Create your Buildathon builder profile
              </p>

              <div className="field-group">
                <label htmlFor="reg-name">Full Name *</label>
                <input
                  id="reg-name"
                  type="text"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="reg-email">Email Address *</label>
                <input
                  id="reg-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="reg-password">Password *</label>
                <input
                  id="reg-password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="reg-confirm">Confirm Password *</label>
                <input
                  id="reg-confirm"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
              </div>

              <button type="submit" className="auth-btn">
                CREATE ACCOUNT
              </button>

              <div className="divider" aria-hidden="true">
                <span />
                <p>OR</p>
                <span />
              </div>

              <button
                type="button"
                className="google-btn"
                onClick={signInWithGoogle}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  width="16"
                  height="16"
                />
                <span>SIGN UP WITH GOOGLE</span>
              </button>

              <p className="bottom-text">
                Already have an account?{" "}
                <button
                  type="button"
                  className="switch-link"
                  onClick={() => setIsRegister(false)}
                >
                  Login
                </button>
              </p>

            </form>

          )}

        </div>

      </div>

    </div>
  );
};

export default Login;
