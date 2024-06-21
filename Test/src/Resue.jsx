import React from 'react'
import { useContext } from 'react'
import context from './context/createContext'

function Resue() {

    const {count, increment} = useContext(context)
  return (
    <>
    <div> This is count {count}</div>
    <button onClick={increment}>++++</button>
    </>
  )
}

export default Resue