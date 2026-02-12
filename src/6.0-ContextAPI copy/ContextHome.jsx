import React from 'react'
import MessageContextProvider from './MessageContextProvider'
import Display from '../6.0-ContextAPI/Display'

function ContextHome() {
  return (
    <div>
      <MessageContextProvider>
        <Display />
      </MessageContextProvider>
    </div>
  )
}

export default ContextHome