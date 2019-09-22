import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'
import Catalog from '../components/catalog'

import { handleLastRead, logInstruction } from '../utils'

import './postpage.css'

const PostPage = ({ path, pageContext: { data, allData } }) => {
  useEffect(() => {
    logInstruction()
    handleLastRead({
      id: data.id,
      title: data.title.rendered,
      topic: path.split('/')[1],
    })
  })
  return (
    <Layout>
      <SEO
        title={data.title.rendered}
        description={String(data.excerpt.rendered).replace(/<[^>]*>/g, '')}
      />
      <div className="post-area">
        <Post
          allData={allData}
          path={path}
          title={data.title.rendered}
          content={data.content.rendered}
        />
        <Catalog path={path} topics={allData} />
      </div>
    </Layout>
  )
}

export default PostPage
