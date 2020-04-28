import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Category from '../components/category'
import { topicTranslation } from '../utils'

import './topicpage.css'

const TopicPage = ({ path, pageContext: { data } }) => {
  const topic = path.replace('/', '')
  return (
    <Layout>
      <SEO title={topicTranslation(path)} />
      <div className="category-area">
        <Category topic={topic} data={data} />
      </div>
    </Layout>
  )
}

export default TopicPage
