import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'
import Catalog from '../components/catalog'

import { handleLastRead, logInstruction } from '../utils'

import './postpage.css'

const PostPage = ({ path, pageContext: { id, data, allData } }) => {
  window.log = allData
  useEffect(() => {
    logInstruction()
    handleLastRead({
      id,
      title: data.title,
      topic: path.split('/')[1],
    })
  })
  return (
    <Layout>
      <p>PostPage</p>
      {/* <SEO
        title={data.title}
        description={'একটা শর্টে লেখার অংশবিশেষ'}
      />
      <div className="post-area">
        <Post
          allData={allData}
          path={path}
          title={data.title}
          content={data.content}
        />
        <Catalog path={path} topics={allData} />
      </div> */}
    </Layout>
  )
}

export default PostPage
