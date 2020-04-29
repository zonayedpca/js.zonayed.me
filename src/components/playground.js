import React, { useState } from 'react'

import playIcon from '../assets/images/play.svg'

import './playground.css'
import CodeEditor from './codeeditor'

const PlayGround = () => {
  const [visibility, setVisibility] = useState(false)
  return (
    <>
      <div>
        <p className="version-tag">
          <strong>Beta!</strong>
        </p>
        <div className="playground" onClick={() => setVisibility(!visibility)}>
          <img alt="try coding here" src={playIcon} />
        </div>
        {visibility && (
          <>
            <div className="floating-editor">
              <CodeEditor />
              <p className="msg-warning">
                সঠিক ফল পেতে ব্রাউজারের কন্সোল ব্যবহার করুন
              </p>
            </div>
          </>
        )}
      </div>
      {visibility && (
        <div
          onClick={() => setVisibility(false)}
          className="code-editor-background"
        />
      )}
    </>
  )
}

export default PlayGround
