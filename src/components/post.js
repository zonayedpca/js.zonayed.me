import React from 'react'

import './post.css'

const Post = ({ title, content }) => {
  return (
    <div
      style={{
        width: `calc(100% - 400px)`,
        padding: `100px 0`,
        paddingLeft: `100px`,
        paddingRight: `50px`,
      }}
      className="post"
    >
      <div>
        <h2
          style={{
            fontSize: `48px`,
            marginBottom: `25px`,
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default Post
