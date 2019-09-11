import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import inverseLogo from '../assets/images/inverse-logo.svg'
import Header from './header'

import './intro.css'

const Intro = ({ siteTitle, home }) => (
  <div className={`intro ${home ? 'home' : ''}`}>
    <Header home={home} siteTitle={siteTitle} />
    {home && (
      <>
        <div className="intro-area">
          <div className="intro-main">
            <div className="intro-text">
              <h2>জাভাস্ক্রিপ্ট শিখুন</h2>
              <p>সম্পূর্ন বাংলায় জুনায়েদ এর সাথে</p>
            </div>
            <div className="search">
              <input name="term" placeholder="কি খুঁজতে চাচ্ছেন?" />
              <p>
                <span>বাংলায় সার্চ করুন</span>
              </p>
            </div>
          </div>
          <div className="intro-book">
            <p />
          </div>
        </div>
        <div className="bookmarks-area">BookMark</div>
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
