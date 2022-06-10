import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "./styles.css";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feaching, setFeaching] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const postUser = async () => {
      try {
        setFeaching(true);
        const response = await axios.post("http://localhost:4000/signup", {
          name: name,
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
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Email </label>
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
        {isSubmitted ? (
          <div>
            Thank you for sign up. Please <NavLink to="/login">Login!</NavLink>{" "}
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default Signup;
