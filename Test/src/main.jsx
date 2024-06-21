import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ValueProvider from './context/ValueProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ValueProvider>
    <App />
    </ValueProvider> // count , increment
   
  </React.StrictMode>,
)
