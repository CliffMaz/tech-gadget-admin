import React, { useEffect, useRef } from "react";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/user/userSlice";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="login-right">
        <h2>Welcome to the Admin Page Please Login</h2>
        <form className="login-form" id="login-form">
          <p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              ref={emailRef}
            />
            <i className="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <i className="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              className="submit"
              type="submit"
              id="login"
              value="Login"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            />
          </p>
        </form>
      </div>
      <div className="login-left"></div>
    </div>
  );
};

export default Login;
