import React, { useState, useEffect } from 'react'
import ReactUtterences from 'react-utterances'

import './comment.css'

const repo = 'zonayedpca/js.zonayed.me'

const Comment = () => {
  const [enable, setEnable] = useState(false)
  useEffect(() => {
    setEnable(true)
    return () => {
      setEnable(false)
    }
  }, [enable])
  return (
    <div className="comment">
      <div className="title">
        <h2>আপনার মন্তব্যঃ</h2>
        <p>
          যদি এই পোস্টে কোন ভুল(যেকোনো ধরনের) পেয়ে থাকেন অথবা কোনো ব্যাপারে
          সন্দেহ থাকে তাহলে এখানে জানাতে পারবেন।
        </p>
      </div>
      {enable && <ReactUtterences repo={repo} type={'og:title'} />}
    </div>
  )
}

export default Comment
