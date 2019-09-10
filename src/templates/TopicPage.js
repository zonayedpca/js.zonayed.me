import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Category from '../components/category'

const TopicPage = ({ path, pageContext: { data } }) => {
  const topic = path
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          padding: `100px 0`,
        }}
        className="category-area"
      >
        <Category topic={topic} data={data} />
      </div>
    </Layout>
  )
}

export default TopicPage
