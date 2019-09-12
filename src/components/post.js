import React from 'react'
import { Link } from 'gatsby'

import { findPrevNextPost, sliceCat } from '../utils'

import './post.css'

const Post = ({ allData, path, title, content }) => {
  const [prevPost, nextPost] = findPrevNextPost(allData, path)
  return (
    <div className="post">
      <div>
        <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="pagination">
        <ul>
          {prevPost && (
            <li className="prev">
              <p>আগের পোস্টঃ </p>
              <p>
                <Link
                  to={`/${prevPost.category}/${prevPost.id}`}
                  dangerouslySetInnerHTML={{
                    __html: sliceCat(prevPost.title.rendered),
                  }}
                />
              </p>
            </li>
          )}
          {nextPost && (
            <li className="next">
              <p>পরের পোস্টঃ </p>
              <p>
                <Link
                  to={`/${nextPost.category}/${nextPost.id}`}
                  dangerouslySetInnerHTML={{
                    __html: sliceCat(nextPost.title.rendered),
                  }}
                />
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Post
