import React, { useState } from 'react'

import playIcon from '../assets/images/play.svg'

import './playground.css'

const CodeEditor = React.lazy(() => {
  if (typeof window !== 'undefined') {
    return import('./codeeditor')
  }
  return null
})

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
        <React.Suspense fallback={() => <p>Loading</p>}>
          {visibility && typeof window !== 'undefined' && (
            <>
              <div className="floating-editor">
                <CodeEditor />
                <p className="msg-warning">
                  সঠিক ফল পেতে ব্রাউজারের কন্সোল ব্যবহার করুন
                </p>
              </div>
            </>
          )}
        </React.Suspense>
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
