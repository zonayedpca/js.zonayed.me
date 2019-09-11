import React from 'react'
import { Link } from 'gatsby'

import inverseLogo from '../assets/images/inverse-logo.svg'

import './header.css'

const Header = ({ siteTitle, home }) => {
  return (
    <header className="header">
      <div className={`nav-item ${home ? 'home' : ''}`}>
        <div className="brand">
          <Link to="/">
            <div className="brand-logo">
              <div className="logo">
                <img alt="js-logo" src={inverseLogo} />
              </div>
              <h1>{siteTitle}</h1>
            </div>
          </Link>
        </div>
        <div className="items">
          <ul>
            <li>Github</li>
            <li>Star</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
