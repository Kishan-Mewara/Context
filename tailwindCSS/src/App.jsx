import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>

<div className="max-w-sm mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transform hover:scale-105 transition-transform duration-500">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://cdn.pixabay.com/photo/2024/05/26/00/40/lizard-8787888_1280.jpg" alt="Card Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Card Subtitle</a>
          <p className="mt-2 text-gray-500">This is a brief description of the card. It contains a summary of the content and is typically a few sentences long.</p>
        </div>
      </div>
    </div>
  
  </>
  )
}

export default App
