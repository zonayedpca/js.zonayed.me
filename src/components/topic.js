import React, { useState } from 'react'
import { Link } from 'gatsby'

import { sliceCat, topicTranslation } from '../utils'

import downArrow from '../assets/images/down-arrow.svg'
import upArrow from '../assets/images/up-arrow.svg'

import './topic.css'

const Topic = ({ category, topics, curCategory, curPost }) => {
  const [open, setOpen] = useState(category === curCategory)
  return (
    <div className="topic-list">
      <h4 onClick={() => setOpen(!open)}>
        {topicTranslation(category)}{' '}
        <img alt="down-arrow" src={open ? upArrow : downArrow} />
      </h4>
      {open && (
        <ul>
          {topics.map(({ title, date }, index) => (
            <li key={String(date)}>
              {`${category}/post-${index}` === `${curCategory}/${curPost}` && (
                <span />
              )}
              <Link
                className={`${
                  `${category}/post-${index}` === `${curCategory}/${curPost}`
                    ? `current-post`
                    : ''
                }`}
                to={`/${category}/post-${index}`}
                dangerouslySetInnerHTML={{ __html: sliceCat(title) }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Topic
