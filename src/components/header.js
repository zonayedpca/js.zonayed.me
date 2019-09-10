import React from 'react'
import { Link } from 'gatsby'

import inverseLogo from '../assets/images/inverse-logo.svg'

const Header = ({ siteTitle, home }) => {
  return (
    <header
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          padding: home ? `50px 0` : `25px 0`,
        }}
      >
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
  )
}

export default Header
