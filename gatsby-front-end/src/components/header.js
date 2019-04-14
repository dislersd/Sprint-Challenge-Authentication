import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `coral`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <Link
        to="/register"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Register
      </Link>
      &nbsp;|&nbsp;
      <Link
        to="/login"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Login
      </Link>
      &nbsp;|&nbsp;
      <Link
        to="/jokes"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Jokes
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
