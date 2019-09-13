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
              key={item.id}
              id={item.id}
              title={item.title.rendered}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <p>Suggest Something Else</p>
      )}
    </div>
  )
}

export default Search
