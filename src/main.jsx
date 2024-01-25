import React from 'react'
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "./index.css"
import { GlobalStateProvider } from './context'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStateProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalStateProvider>
    </React.StrictMode>
)