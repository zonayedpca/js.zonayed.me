import React from 'react'

import './post.css'

const Post = ({ title, content }) => {
  return (
    <div className="post">
      <div>
        <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default Post
