import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const styles = {
  hov: {
    cursor: 'pointer',
  },
  right: {
    float: "right",
  },
  space: {
    margin:"5px",
  },
  white: {
    color: "white",
  }
}

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (

    <div className="card notification is-black">
    <div className="card">
        <div className="card-content notification is-black">
        <p className="title is-4 is-size-6-mobile">
                        Login
                    </p>
            {data ? (
              <p>
                You are now logged in. 
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}
              style={styles.space}
              >
                <input
                  className="form-input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <br>
                </br>
                <input
                  className="form-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleChange}
                />
                                <br>
                </br>
                <button
                  className="button is-link is-size-6-mobile"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
          </div>
          </div>
  );
};

export default Login;
