import React, { useState } from "react";
import context from "./createContext";


const ValueProvider = ({children}) => {

    const [count, setCount] = useState(5)

    function increment(){
        setCount(count + 1)
    }
       return(
        <>
        <context.Provider value={{count, increment}}>
            {children}
        </context.Provider>
        </>
       )
}

export default ValueProvider;