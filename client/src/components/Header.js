import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

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

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
    return (
        <div>
        <section className="hero notification is-link is-size-6-mobile">
            <div className="hero-head">
            <header className="navbar" style={styles.right}>

<Link to="/" className="button is-black is-size-6-mobile"
  style={styles.space}
    >
      <span>Home</span>
    </Link>
    <div>
          {Auth.loggedIn() ? (
            <>
            <Link className="button is-black is-size-6-mobile"
    style={styles.space}
    to="/postForm"
    >
      <span>New Post</span>
    </Link>
              <button className="button is-black is-size-6-mobile"
    style={styles.space} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="button is-black is-size-6-mobile"
    style={styles.space}
    to="/login"
    >
      <span>Login</span>
    </Link>
    <Link className="button is-black is-size-6-mobile"
    style={styles.space}
    to="/signup"
    >
      <span>Sign Up</span>
    </Link>
            </>
          )}
        </div>
    

</header>
  </div>
            <div className="hero-body is-size-6-mobile">
                <article className="media">
                    
      <div className="media-content">
                <p className="title is-size-6-mobile"
                style={styles.white}
                >
                    MERN Blog
                </p>
                <p className="subtitle is-size-7-mobile"
                style={styles.white}
                >
                    A simple blog created with the MERN stack
                </p>
</div>
                </article>
                </div>
        </section>
        </div>
    );
}

export default Header;