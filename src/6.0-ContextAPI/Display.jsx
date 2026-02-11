import React, { useContext } from 'react'
import { MessageContext } from './MessageContext'

function Display() {

    const message = useContext(MessageContext);

  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default Display