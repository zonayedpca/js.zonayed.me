import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Header from './header'

import './intro.css'
import Search from './search'
import Lastread from './lastread'

const Intro = ({ siteTitle, home, dataTitle }) => {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (show) {
      setShow(false)
    }
  }, [])
  return (
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
            <div
              role="button"
              tabIndex={0}
              onKeyPress={() => false}
              onClick={() => setShow(!show)}
              className="intro-book"
            >
              <div className="book-image">
                <img
                  alt="Haatekolome JavaScript"
                  src={require('../assets/images/book.png')}
                />
              </div>
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
      <div className={`book-info ${show ? 'showed' : ''}`}>
        <p>
          <strong>হাতেকলমে জাভাস্ক্রিপ্ট</strong> বইটি এখন পাওয়া যাচ্ছে
          লাইব্রেরীতে।
        </p>
        <hr />
        <p>
          সংগ্রহ করুন{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.rokomari.com/book/202772/hate-kolome-javascript"
          >
            রকমারি
          </a>{' '}
          থেকে। অথবা চাইলে নীলক্ষেত থেকেও [
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/zonayedpca/posts/3381486155264049"
          >
            দোকান-১
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/zonayedpca/posts/3384884554924209"
          >
            দোকান-২
          </a>
          ] সংগ্রহ করতে পারবেন। বাংলাদেশের যেকোনো জায়গায় কুরিয়ারে পাঠানো হয়।
        </p>
        <button onClick={() => setShow(false)}>বন্ধ করুন</button>
      </div>
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
