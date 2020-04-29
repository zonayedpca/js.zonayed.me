import React, { useEffect } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'
import Catalog from '../components/catalog'
import PlayGround from '../components/playground'

import { handleLastRead, logInstruction } from '../utils'

import './postpage.css'

const PostPage = ({ path, pageContext: { id, data, allData } }) => {
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
      <SEO title={data.title} description={'একটা শর্টে লেখার অংশবিশেষ'} />
      <div className="post-area">
        <Post
          allData={allData}
          path={path}
          title={data.title}
          content={data.content}
        />
        <Catalog path={path} topics={allData} />
        <PlayGround />
      </div>
    </Layout>
  )
}

export default PostPage
