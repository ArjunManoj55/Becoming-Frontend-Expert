import { createContext, useContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ Children }) => {
  const message = "hi context";
  return(
 <div>
    <MessageContext.Provider value={message}>
      {Children}
    </MessageContext.Provider>
  </div>
  )
 
};

export default MessageProvider;
