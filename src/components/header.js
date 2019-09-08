import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#f0db4f`,
      height: `100vh`,
      minHeight: `630px`,
      display: `flex`,
      flexWrap: `wrap`,
    }}
  >
    <header
      style={{
        margin: `0 auto`,
      }}
    >
      <div style={{}}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#333`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
    <div className="intro-area">
      <div className="intro-main">
        <div className="intro-text">
          <h2>Learn JavaScript Bengali</h2>
          <p>Learn everything you want</p>
        </div>
        <div className="search">
          <input />
          <p>
            <span>Write in Bengali</span>
          </p>
        </div>
      </div>
      <div className="intro-book">
        <p>Book Coming soon...</p>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
