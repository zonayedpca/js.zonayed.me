import React, { useState } from 'react'
import { Link } from 'gatsby'

import { sliceCat, topicTranslation } from '../utils'

import downArrow from '../assets/images/down-arrow.svg'
import upArrow from '../assets/images/up-arrow.svg'

const Topic = ({ category, topics, curCategory, curPost }) => {
  const [open, setOpen] = useState(category === curCategory)
  return (
    <div style={{ marginBottom: `25px` }}>
      <h4
        style={{ fontSize: `22px`, cursor: `pointer` }}
        onClick={() => setOpen(!open)}
      >
        {topicTranslation(category)}{' '}
        <img
          style={{
            height: `15px`,
          }}
          alt="down-arrow"
          src={open ? upArrow : downArrow}
        />
      </h4>
      {open && (
        <ul style={{ marginTop: `25px` }}>
          {topics.map(({ id, title }) => (
            <li
              style={{
                position: `relative`,
                fontSize: `18px`,
                listStyle: `none`,
                margin: `10px 0`,
              }}
              key={id}
            >
              {id === Number(curPost) && (
                <span
                  style={{
                    content: `" "`,
                    position: `absolute`,
                    height: `100%`,
                    width: `5px`,
                    background: `#f0db4f`,
                    left: `-20px`,
                  }}
                />
              )}
              <Link
                to={`/${category}/${id}`}
                style={{
                  fontWeight: id === Number(curPost) ? `bolder` : `normal`,
                  color: '#333',
                  textDecoration: `none`,
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
