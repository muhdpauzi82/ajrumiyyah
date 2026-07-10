import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./ui/ads.css";
import "./ui/theme/index.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

