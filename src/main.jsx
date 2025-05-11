import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DarkThemed from './components/DarkThemed.jsx'
import LogistHome from './components/LogistHome.jsx'
import HomeOne from "./Home1/HomeOne.jsx"
import HomeTwo from './Home1/HomeTwo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomeTwo/>
    {/* <HomeOne/> */}
    {/* <DarkThemed /> */}
  </StrictMode>,
)
