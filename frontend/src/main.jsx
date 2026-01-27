import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Routes, Route } from 'react-router-dom'
import ConvertImage from './ConvertImage.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
<Route path="/convertimage" element={<ConvertImage />} />
</Routes>
<App />
</BrowserRouter>

)

