import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Header from './header'

import './intro.css'
import Search from './search'
import Lastread from './lastread'

const Intro = ({ siteTitle, home, mode, handleMode, dataTitle }) => {
  const [input, setInput] = useState('')
  return (
    <div className={`intro ${home ? 'home' : ''}`}>
      <Header
        home={home}
        mode={mode}
        handleMode={handleMode}
        siteTitle={siteTitle}
      />
      {home && (
        <>
          <div className="intro-area">
            <div className="intro-main">
              <div className="intro-text">
                <h2>জাভাস্ক্রিপ্ট শিখুন</h2>
                <p>সম্পূর্ন বাংলায় জুনায়েদ এর সাথে</p>
              </div>
              <div className="search">
                <input
                  autoComplete="off"
                  name="term"
                  onChange={({ target: { value } }) =>
                    setInput(value.trimStart().toLowerCase())
                  }
                  value={input}
                  placeholder="কি খুঁজতে চাচ্ছেন?"
                />
                <p>
                  <span>বাংলায় সার্চ করুন</span>
                </p>
              </div>
            </div>
            <div className="intro-book">
              <p />
            </div>
          </div>
          <div className="action-area">
            {input ? (
              <Search input={input} dataTitle={dataTitle} />
            ) : (
              <Lastread />
            )}
          </div>
        </>
      )}
    </div>
  )
}

Intro.propTypes = {
  siteTitle: PropTypes.string,
}

Intro.defaultProps = {
  siteTitle: ``,
}

export default Intro
