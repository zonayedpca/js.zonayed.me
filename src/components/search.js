import React from 'react'

import { searchMatch } from '../utils'
import Card from './card'

import './search.css'

const Search = ({ input, dataTitle }) => {
  const searchData = searchMatch(dataTitle, input)

  return (
    <div className="search">
      {searchData.length ? (
        <ul>
          {searchData.map((item, index) => (
            <Card
              action="search"
              key={item.id}
              id={item.id}
              topic={item.topic}
              title={item.title}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <p className="not-found">কিছু পাওয়া যায়নি!</p>
      )}
    </div>
  )
}

export default Search
