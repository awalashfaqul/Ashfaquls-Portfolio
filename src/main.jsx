import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter basename="/Ashfaquls-Portfolio"> {/* <StrictMode> replaced with <BrowserRouter></BrowserRouter> for gh-pages */}
      <App />
    </BrowserRouter>
  
)
