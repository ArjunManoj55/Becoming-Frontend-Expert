import React from 'react'
import Display from './Display'
import MessageProvider from './MessageContext.jsx'

function ContextHome() {
  return (
    <MessageProvider >
         <Display />
    </MessageProvider>
  
  )
}

export default ContextHome