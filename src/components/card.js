import React from 'react'
import { Link } from 'gatsby'

import { sliceCat } from '../utils'

import './card.css'

const Card = ({ id, title, index, topic }) => {
  return (
    <li className="card">
      <Link to={`/${topic}/${id}`}>
        <h4 dangerouslySetInnerHTML={{ __html: sliceCat(title) }} />
      </Link>
    </li>
  )
}

export default Card
