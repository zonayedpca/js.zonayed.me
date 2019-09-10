import React from 'react'
import { Link } from 'gatsby'

import { topicTranslation } from '../utils'
import Card from './card'

const Category = ({ topic, data }) => {
  return (
    <div
      key={topic}
      style={{ marginBottom: `50px`, padding: `0 100px` }}
      className="topic"
    >
      <h3>
        <Link to={`/${topic}`}>{topicTranslation(topic)}</Link>
      </h3>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          margin: 0,
          listStyle: `none`,
        }}
      >
        {data.map(({ id, title: { rendered } }, index) => (
          <Card key={id} id={id} title={rendered} index={index} topic={topic} />
        ))}
      </ul>
    </div>
  )
}

export default Category
