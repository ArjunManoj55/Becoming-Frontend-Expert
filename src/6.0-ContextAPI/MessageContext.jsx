import React from 'react'
import { createContext } from 'react'

export const MessageContext = createContext();

export const MessageProvider = ({children}) => {

    const message = "hi  from context api";

    return(
       <div>

        <MessageContext.Provider value={message}>
            {children}
        </MessageContext.Provider>

       </div>
    )
}

export default MessageProvider;