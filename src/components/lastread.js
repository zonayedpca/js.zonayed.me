import React, { useState } from 'react'

import { handleLastRead } from '../utils'

import './lastread.css'
import Card from './card'

const Lastread = () => {
  const [post] = useState(handleLastRead())
  if (!post) {
    return null
  }
  return (
    <div className="lastread-area">
      <Card
        id={post.id}
        title={post.title}
        action="last-read"
        topic={post.topic}
      />
    </div>
  )
}

export default Lastread
