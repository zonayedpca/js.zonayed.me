import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import inverseLogo from '../assets/images/inverse-logo.svg'
import Header from './header'

const Intro = ({ siteTitle, home }) => (
  <div
    style={{
      background: `#f0db4f`,
      height: home ? `100vh` : `auto`,
      minHeight: home ? `630px` : `auto`,
      padding: `0 100px`,
      display: `flex`,
      flexWrap: `wrap`,
      flexDirection: `column`,
      borderTop: `solid 3px #323330`,
      borderBottom: `solid 3px #323330`,
    }}
  >
    <Header home={home} siteTitle={siteTitle} />
    {home && (
      <>
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
      </>
    )}
  </div>
)

Intro.propTypes = {
  siteTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: ``,
}

export default Intro
