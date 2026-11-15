import React, { useContext } from 'react'
import { MessageContext } from './Context'



function Component() {
    const message = useContext(MessageContext);
  return (
    <div>{message}</div>
  )
}

export default Component