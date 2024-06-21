import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import Check from './Check'
import ValueProvider from './context/ValueProvider'
import Resue from './Resue'

function App() {
 const arr = [{
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
 }]

  return (
    <>
  {/* {
     arr.map((i) => (
      <div key={i.id}> 
      <h1>{i.name}</h1>
      <h1>{i.price}</h1>
      </div>
     ))
   
    }  */}
    
    {/* <Count/>   */}
    {/* <Check/> */}

    <Resue/>
    
     </>
  )
}

export default App
