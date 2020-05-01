import React, { useState, useEffect } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'brace/ext/language_tools'
import 'brace/ext/beautify'
import 'brace/ext/emmet'

import './codeeditor.css'

import executeIcon from '../assets/images/execute.svg'
import clearIcon from '../assets/images/clear.svg'

const generateClassName = type => {
  switch (type) {
    case 'log':
      return 'log'
    case 'error':
      return 'error'
    default:
      return ''
  }
}

const CodeEditor = () => {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState(null)
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('keydown', handleKeyboardShorcut)
    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('keydown', handleKeyboardShorcut)
    }
  })
  const handleKeyboardShorcut = e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      handleEvaluation()
    }
  }
  const onLoad = () => {
    console.log('Playground Ready')
  }
  const onChange = value => {
    setCode(value)
  }
  const handleEvaluation = () => {
    const output = []
    console.oldLog = console.log
    console.stdlog = console.log.bind(console)
    console.logs = []
    console.log = function() {
      const argumentsArray = Array.from(arguments)
      const definedArguments = argumentsArray.map(argument => {
        if (typeof argument === 'number') {
          return argument
        }
        if (typeof argument === 'string') {
          return `"${argument}"`
        }
        if (typeof argument === 'object') {
          if (argument.constructor === Object) {
            return JSON.stringify(argument)
          }
          if (argument.constructor === Array) {
            return `[${String(argument)
              .split(',')
              .join(', ')}]`
          }
          if (argument.constructor === Function) {
            return 'Function'
          }
          return argument
        }
        return argument
      })
      output.push({
        type: 'log',
        output: definedArguments.join(' '),
      })
      console.stdlog.apply(console, arguments)
    }
    try {
      //eslint-disable-next-line
      eval(code)
    } catch (err) {
      output.push({
        type: 'error',
        output: err.message,
      })
    }
    setOutput(output)
    console.log = console.oldLog
  }
  return (
    <div className="code-editor">
      <div>
        <AceEditor
          className={`ace-editor ${output ? 'output' : ''}`}
          placeholder="Code Here"
          mode="javascript"
          theme="solarized_dark"
          name="blah2"
          onLoad={onLoad}
          onChange={onChange}
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        {output && (
          <div className="code-output">
            <div className="output-toolbar">
              <div onClick={() => setOutput(null)}>
                <img alt="Clear it out" src={clearIcon} />
              </div>
              <div onClick={() => handleEvaluation()}>
                <img alt="Execute it" src={executeIcon} />
              </div>
            </div>
            <div className="actual-output">
              {output.map((singleOutput, index) => (
                <div className="code-line">
                  <code
                    className={generateClassName(singleOutput.type)}
                    key={index}
                  >
                    {singleOutput.output}
                  </code>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="action-btn">
        {!output && (
          <div onClick={handleEvaluation}>
            <img src={executeIcon} alt="Execute Code" />
          </div>
        )}
      </div>
    </div>
  )
}

export default CodeEditor
