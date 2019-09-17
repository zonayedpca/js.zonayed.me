import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Category from '../components/category'

import './homepage.css'

const HomePage = ({ pageContext: { data } }) => {
  const topics = Object.keys(data)
  return (
    <Layout dataTitle={data} home>
      <SEO title="হাতেকলমে জাভাস্ক্রিপ্ট" />
      <div className="contents-area">
        {topics.map(topic => (
          <Category key={topic} topic={topic} data={data[topic]} />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
