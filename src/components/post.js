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
      <div>
        <ul>
          <li className="prev">
            <img />
            <p>আগের পোস্টঃ </p>
            <p>
              <a href="#">পোস্টটা এখানে যাবে</a>
            </p>
          </li>
          <li className="next">
            <img />
            <p>পরের পোস্টঃ </p>
            <p>
              <a href="#">পোস্টটা এখানে যাবে</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Post
