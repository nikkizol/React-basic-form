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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
      {submitted ? <div className='success-message'>Success! Thank you for registering</div> : null}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handelFirstNameChange}
        />
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handelLastNameChange}
        />
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handelEmailChange}
        />
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
