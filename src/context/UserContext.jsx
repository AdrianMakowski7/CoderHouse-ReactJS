import { createContext, useState, useContext} from "react";

const UserContext = createContext("");

export const UserProvider = ({children}) => {
  const [userName, setUserName] = useState("Juan Carlos")
  UserContext.displayName= "UserContext";

  
  function saludar() {
    console.log(`Welcome, ${userName}!`)
  }
    
  return <UserContext.Provider value={{userName, setUserName, saludar}}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if(!context){
    throw new Error(`El usuario useUser debe ser usado dentro de un UserProvide.`)
  }
  return context
};
