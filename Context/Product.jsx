import React from 'react'
import { ProductContext } from './Context'
import { useContext } from 'react'

export default function Product() {
    const {arr } = useContext(ProductContext)
    console.log('this is array from product ',arr);
  return (
    <>
    {
        arr.map((i)=>(
            <div key={i.id}>
                <h1>{i.name}</h1>
                <h1>{i.price}</h1>

            </div>
        ))

    }

</>
  )
}
