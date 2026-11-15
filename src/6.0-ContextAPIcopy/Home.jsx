import React from 'react'
import Component from './Component'
import { MessageProvider } from './Context.jsx'

function Home() {
  return (
    <div>
        <MessageProvider>
             <Component />
        </MessageProvider>
       
    </div>
  )
}

export default Home