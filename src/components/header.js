import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#f0db4f`,
      height: `100vh`,
      minHeight: `630px`,
      padding: `0 100px`,
      display: `flex`,
      flexWrap: `wrap`,
      flexDirection: `column`,
    }}
  >
    <header
      style={{
        flex: 1,
        padding: `25px 0`,
      }}
    >
      <div style={{}}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#323330`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
    <div
      style={{
        flex: 2,
        display: `flex`,
      }}
      className="intro-area"
    >
      <div style={{ flex: 2, alignSelf: `center` }} className="intro-main">
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
      <div style={{ flex: 1, alignSelf: `center` }} className="intro-book">
        <p>Book Coming soon...</p>
      </div>
    </div>
    <div style={{ flex: 1 }} className="bookmarks-area">
      BookMark
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
