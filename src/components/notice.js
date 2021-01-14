import React, { useState } from 'react'

import './notice.css'

const YT_SUBSCRIPTION_STATUS = 'COURSE_SUGGESTIONS'

const Notice = () => {
  const [isShown, setIsShown] = useState(true)
  const isYTShown =
    typeof window !== `undefined`
      ? window.localStorage.getItem(YT_SUBSCRIPTION_STATUS)
      : false
  const handleClick = type => {
    if (typeof window !== undefined) {
      window.localStorage.setItem(YT_SUBSCRIPTION_STATUS, 'true')
      setIsShown(false)
    }
  }
  if (isYTShown === 'true' || !isShown) {
    return null
  }
  return (
    <div className="notice-area">
      <p>
        <strong>কোড উইদ জুনায়েদ</strong> থেকে রিঅ্যাক্ট জেএস এর উপর কোর্স আনার প্ল্যান চলছে
      </p>
      <div>
        <a
          href="https://forms.gle/GbVVq8DYpwHEegVh8"
          target="__blank"
          rel="noopener noreferrer"
          hef=""
        >
          আপনার মতামত দিন
        </a>
        <button onClick={handleClick}>x</button>
      </div>
    </div>
  )
}

export default Notice
