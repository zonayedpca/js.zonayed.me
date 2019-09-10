import React from 'react'

const Post = ({ title, content }) => {
  return (
    <div
      style={{
        flex: 3,
        padding: `100px 0`,
        paddingLeft: `100px`,
        paddingRight: `50px`,
      }}
      className="post"
    >
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default Post
