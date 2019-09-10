import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Category from '../components/category'

const HomePage = ({ pageContext: { data } }) => {
  const topics = Object.keys(data)
  return (
    <Layout home>
      <SEO title="হোমপেজ" />
      <div
        style={{
          padding: `100px 0`,
        }}
        className="contents-area"
      >
        {topics.map(topic => (
          <Category topic={topic} data={data[topic]} />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
