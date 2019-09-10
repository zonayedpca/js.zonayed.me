import React from 'react'
import { topicTranslation, sliceCat } from '../utils'
import Topic from './topic'

const Catalog = ({ path, topics }) => {
  const [_blank, curCategory, curPost] = path.split('/')
  const categories = Object.keys(topics)
  return (
    <div
      style={{
        backgroundColor: `#e9ebee`,
        flex: 1,
        padding: `100px 0`,
        paddingRight: `100px`,
        paddingLeft: `50px`,
        borderLeft: `solid 3px #323330`,
      }}
      className="catalog"
    >
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
