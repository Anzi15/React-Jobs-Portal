import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwinds.css'

const rootElem = document.getElementById('root');

ReactDOM.createRoot(rootElem).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
