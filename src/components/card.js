import React from 'react'
import { Link } from 'gatsby'

import { sliceCat } from '../utils'

import search from '../assets/images/search.svg'
import history from '../assets/images/history.svg'

import './card.css'

const Card = ({ link, id, title, action, topic }) => {
  return (
    <li className={`card ${action ? action : ''}`}>
      {link ? (
        <a target="__blank" rel="noopener noreferrer" href={link}>
          <h4 dangerouslySetInnerHTML={{ __html: sliceCat(title) }} />
        </a>
      ) : (
        <Link to={`/${topic}/post-${id}`}>
          <h4 dangerouslySetInnerHTML={{ __html: sliceCat(title) }} />
        </Link>
      )}
      {action && (
        <img src={action === 'search' ? search : history} alt="search" />
      )}
    </li>
  )
}

export default Card
