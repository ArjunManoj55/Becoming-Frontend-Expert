import React, { createContext } from 'react'

export const MessageContext = createContext();

export const MessageContextProvider = ({children}) =>  {

  const message = "hello"

  return (
    <div>
      <MessageContext.Provider value={message}>
        {children}
      </MessageContext.Provider>
    </div>
  )
}

export default MessageContextProvider