import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "./styles.css";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feaching, setFeaching] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const postUser = async () => {
      try {
        setFeaching(true);
        const response = await axios.post("http://localhost:4000/login", {
          email: email,
          password: password,
        });
        if (response.status === 200) {
          setIsSubmitted(true);
        }

        console.log("resposta do servidor", response);

        setFeaching(false);
      } catch (error) {
        console.log(error.message);
        setFeaching(false);
      }
    };

    return postUser();
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" disabled={feaching}>
            submit
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <div>
        <div>Login page if you don't have a log in please sign up</div>
        <div></div>
        <NavLink to="/signin">Sign up!</NavLink>
      </div>
    </div>
  );
};

export default Login;
