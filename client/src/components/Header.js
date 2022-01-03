import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link className="button is-black is-size-6-mobile"
    style={styles.space}
    to="/portfolio"
    >
      <span>Portfolio</span>
    </Link>
    <Link className="button is-black is-size-6-mobile"
    style={styles.space}
    to="/contact"
    >
      <span>Contact</span>
    </Link>

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