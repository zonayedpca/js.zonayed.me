import React from 'react'
import { Link } from 'gatsby'

import { topicTranslation, topicColor } from '../utils'
import Card from './card'

import './category.css'

const Category = ({ topic, data }) => {
  return (
    <div key={topic} className="topic">
      <div className="title">
        <span
          style={{
            backgroundColor: topicColor(topic),
          }}
        />
        <h3>
          <Link to={`/${topic}`}>{topicTranslation(topic)}</Link>
        </h3>
      </div>
      <ul>
        {data.map(({ title }, index) => (
          <Card
            key={title}
            id={index}
            title={title}
            index={index}
            topic={topic}
          />
        ))}
      </ul>
    </div>
  )
}

export default Category
