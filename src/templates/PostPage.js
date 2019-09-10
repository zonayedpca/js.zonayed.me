import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PostPage = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: `flex`,
        }}
        className="post-area"
      >
        <div
          style={{ flex: 3, padding: `100px 0`, paddingLeft: `100px` }}
          className="post"
        >
          Post Here
        </div>
        <div
          style={{
            backgroundColor: `#e9ebee`,
            flex: 1,
            padding: `100px 0`,
            paddingRight: `100px`,
            borderLeft: `solid 3px #323330`,
          }}
          className="index"
        >
          Index
        </div>
      </div>
    </Layout>
  )
}

export default PostPage
