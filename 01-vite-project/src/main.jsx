import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Function_name from './Second.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Function_name/>
  </StrictMode>,
)
