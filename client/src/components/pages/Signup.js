import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

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

const Signup = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };

  return (

    <div className="card notification is-black">
    <div className="card">
        <div className="card-content notification is-black">
        <p className="title is-4 is-size-6-mobile">
                        Create account
                    </p>
            {data ? (
              <p>
                You have successfully created an account.
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}
              style={styles.space}
              >
                  <input
                  className="form-input"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formState.name}
                  onChange={handleChange}
                />
                <br>
                </br>
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

export default Signup;
