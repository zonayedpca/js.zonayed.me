import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'
import Catalog from '../components/catalog'

import './postpage.css'

const PostPage = ({ path, pageContext: { data, allData } }) => {
  return (
    <Layout>
      <SEO title={data.title.rendered} />
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
