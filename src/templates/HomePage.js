import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Category from '../components/category'

import './homepage.css'

const HomePage = ({ pageContext: { data } }) => {
  const topics = Object.keys(data)
  return (
    <Layout dataTitle={data} home>
      <SEO
        title="হাতেকলমে জাভাস্ক্রিপ্ট | সম্পূর্ণ বাংলায় জাভাস্ক্রিপ্ট শিখুন"
        description="সম্পূর্ণ বাংলায় জুনায়েদ এর সাথে জাভাস্ক্রিপ্ট শিখুন। ব্যাসিক থেকে শুরু করে ইএস৬ সিনট্যাক্স এবং নিত্যদিনের প্রয়োজনীয় টেকনিকসহ সবকিছু বাংলায় হাতেকলমে শিখুন"
      />
      <div className="contents-area">
        {topics.map(topic => (
          <Category key={topic} topic={topic} data={data[topic]} />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
