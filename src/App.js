import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handelFirstNameChange = ({ target }) => {
    setValues((values) => ({
      ...values,
      firstName: target.value,
    }));
  };

  const handelLastNameChange = ({ target }) => {
    setValues((values) => ({
      ...values,
      lastName: target.value,
    }));
  };

  const handelEmailChange = ({ target }) => {
    setValues((values) => ({
      ...values,
      email: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <div className="form-group">
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handelFirstNameChange}
            pattern="^[A-Z][-a-zA-Z]+$"
          />
          {submitted && !values.firstName && <p id="error">Please enter a first name</p>}
        </div>
        <div className="form-group">
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handelLastNameChange}
            pattern="^[A-Z][-a-zA-Z]+$"
          />
          {submitted && !values.lastName && (
            <p id="error">Please enter a last name</p>
          )}
        </div>
        <div className="form-group">
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}Í
            onChange={handelEmailChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"Í
          />
          {submitted && !values.email && (
            <p id="error">Please enter an email address</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
