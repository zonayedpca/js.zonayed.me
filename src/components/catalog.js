import React from 'react'
import Topic from './topic'

import './catalog.css'

const Catalog = ({ path, topics }) => {
  const [, curCategory, curPost] = path.split('/')
  const categories = Object.keys(topics)
  return (
    <div className="catalog">
      {categories.map(category => (
        <Topic
          key={category}
          topics={topics[category]}
          category={category}
          curCategory={curCategory}
          curPost={curPost}
        />
      ))}
    </div>
  )
}

export default Catalog
