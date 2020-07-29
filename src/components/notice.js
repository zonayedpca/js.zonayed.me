import React, { useState } from 'react'

import './notice.css'

const YT_SUBSCRIPTION_STATUS = 'YT_SUBSCRIPTION_STATUS'

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
        <strong>কোড উইদ জুনায়েদ</strong> এখন ইউটিউবে
      </p>
      <div>
        <a
          href="https://www.youtube.com/CodeWithZonayed?sub_confirmation=1"
          target="__blank"
          rel="noopener noreferrer"
          hef=""
        >
          এখনই সাবস্ক্রাইব করুন
        </a>
        <button onClick={handleClick}>x</button>
      </div>
    </div>
  )
}

export default Notice
