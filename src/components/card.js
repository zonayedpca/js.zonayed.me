import React from 'react'
import { Link } from 'gatsby'

import { sliceCat } from '../utils'

const Card = ({ id, title, index, topic }) => {
  return (
    <li
      style={{
        flexBasis: `calc(100%/3 - 30px)`,
        margin: `15px`,
        marginLeft: index % 3 === 0 ? 0 : `15px`,
        border: `solid 3px #323330`,
        backgroundColor: `#f0db4f`,
        borderRadius: 4,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <Link
        to={`/${topic}/${id}`}
        style={{
          display: `block`,
          color: `#323330`,
          textDecoration: `none`,
          width: `100%`,
        }}
      >
        <h4
          style={{
            padding: `25px`,
            fontSize: `20px`,
          }}
          dangerouslySetInnerHTML={{ __html: sliceCat(title) }}
        />
      </Link>
    </li>
  )
}

export default Card
