import React, { useState } from 'react'

import './codeeditor.css'

const CodeEditor = () => {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState(null)
  return (
    <div>
      <input value={code} onChange={e => setCode(e.target.value)} />
      <button
        onClick={() => {
          console.oldLog = console.log
          console.stdlog = console.log.bind(console)
          console.logs = []
          console.log = function() {
            console.logs.push(Array.from(arguments))
            console.stdlog.apply(console, arguments)
          }
          eval(code)
          setOutput(console.logs)
          // need to reset back console log
          console.log = console.oldLog
        }}
      >
        Excute
      </button>
      <div>{output}</div>
    </div>
  )
}

export default CodeEditor
