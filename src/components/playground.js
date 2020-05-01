import React, { useState } from 'react'

import playIcon from '../assets/images/play.svg'

import './playground.css'

let codeEditor = null

if (typeof window !== 'undefined') {
  codeEditor = require('./codeeditor')
}

const PlayGround = () => {
  let CodeEditor = null
  const [visibility, setVisibility] = useState(false)
  if (codeEditor) {
    CodeEditor = codeEditor.default
  }
  const renderCodeEditor = () => {
    if (CodeEditor) {
      return <CodeEditor />
    }
    return <p>Not in client-side</p>
  }
  return (
    <>
      <div>
        <p className="version-tag">
          <strong>Beta!</strong>
        </p>
        <div className="playground" onClick={() => setVisibility(!visibility)}>
          <img alt="try coding here" src={playIcon} />
        </div>
        {typeof window !== 'undefined' && (
          <>
            <div
              style={{ display: visibility ? 'block' : 'none' }}
              className="floating-editor"
            >
              {renderCodeEditor()}
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
