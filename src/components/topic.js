import React, { useState } from 'react'
import { Link } from 'gatsby'

import { sliceCat, topicTranslation } from '../utils'

const Topic = ({ category, topics, curCategory, curPost }) => {
  const [open, setOpen] = useState(category === curCategory)
  return (
    <div style={{ marginBottom: `25px` }}>
      <h4 style={{ cursor: `pointer` }} onClick={() => setOpen(!open)}>
        {topicTranslation(category)}
      </h4>
      {open && (
        <ul>
          {topics.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/${category}/${id}`}
                style={{
                  fontWeight: id === Number(curPost) ? `bolder` : `normal`,
                }}
                dangerouslySetInnerHTML={{ __html: sliceCat(title.rendered) }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Topic
