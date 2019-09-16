import React, { useState } from 'react'
import Topic from './topic'

import menu from '../assets/images/menu.svg'

import './catalog.css'

const Catalog = ({ path, topics }) => {
  const [enable, setEnable] = useState(false)
  const [, curCategory, curPost] = path.split('/')
  const categories = Object.keys(topics)
  return (
    <div className={`catalog ${enable ? '' : 'mobile'}`}>
      <div onClick={() => setEnable(!enable)} className="action">
        <button>
          <img src={menu} alt="menu" />
        </button>
      </div>
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
