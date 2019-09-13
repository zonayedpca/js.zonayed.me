import React from 'react'
import ReactUtterences from 'react-utterances'

import './comment.css'

const repo = 'zonayedpca/GithubComments'

const Comment = () => {
  return (
    <div className="comment">
      <div className="title">
        <h2>আপনার মন্তব্যঃ</h2>
        <p>
          যদি এই পোস্টে কোন ভুল(যেকোনো ধরনের) পেয়ে থাকেন অথবা কোনো ব্যাপারে
          সন্দেহ থাকে তাহলে এখানে জানাতে পারবেন।
        </p>
      </div>
      <ReactUtterences repo={repo} type={'og:title'} />
    </div>
  )
}

export default Comment
