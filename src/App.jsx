import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

const App = () => {
    return (
        <div className='min-h-screen bg-[#F8F8F8]'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<SearchPage />} />
            </Routes>
        </div>
    )
}

export default App