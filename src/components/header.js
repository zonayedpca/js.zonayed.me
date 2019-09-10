import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import inverseLogo from '../assets/images/inverse-logo.svg'

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
      borderTop: `solid 3px #323330`,
      borderBottom: `solid 3px #323330`,
    }}
  >
    <header
      style={{
        flex: 1,
      }}
    >
      <div style={{ display: `flex`, alignItems: `center`, padding: `50px 0` }}>
        <div style={{ flex: 1, margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#323330`,
              textDecoration: `none`,
            }}
          >
            <div style={{ display: `flex`, alignItems: `center` }}>
              <div
                style={{ width: `50px`, height: `50px`, marginRight: `15px` }}
              >
                <img alt="js-logo" src={inverseLogo} />
              </div>
              <h1 style={{ fontSize: `28px` }}>{siteTitle}</h1>
            </div>
          </Link>
        </div>
        <div>
          <ul style={{ display: `flex` }}>
            <li>Github</li>
            <li>Star</li>
          </ul>
        </div>
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
        <div style={{ marginBottom: `10px` }} className="intro-text">
          <h2 style={{ fontSize: `52px`, color: `#323330` }}>
            জাভাস্ক্রিপ্ট শিখুন
          </h2>
          <p style={{ fontSize: `26px`, color: `#323330` }}>
            সম্পূর্ন বাংলায় জুনায়েদ এর সাথে
          </p>
        </div>
        <div className="search">
          <input
            name="term"
            placeholder="কি খুঁজতে চাচ্ছেন?"
            style={{
              display: `block`,
              width: `60%`,
              border: `3px solid #323330`,
              padding: `10px 15px`,
              fontSize: `18px`,
              borderRadius: `4px`,
            }}
          />
          <p style={{ marginTop: `5px` }}>
            <span style={{ fontSize: `18px` }}>বাংলায় সার্চ করুন</span>
          </p>
        </div>
      </div>
      <div style={{ flex: 1, alignSelf: `center` }} className="intro-book">
        <p>...</p>
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
