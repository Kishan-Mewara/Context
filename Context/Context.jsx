import React, {createContext} from 'react'
export const ProductContext = createContext()


function Provider({children}){
    const arr = [
        {
        id:1,
        name: 'kishan',
        price: 20,
       },

       {
        id:2,
        name: 'kishan1',
        price: 20,
       },

       {
        id:3,
        name: 'kishan2',
        price: 20,
       }
    ]

       return(
        <>

        <ProductContext.Provider value={{arr}}>
            {children}
        </ProductContext.Provider>

        </>
       )

}

export default Provider