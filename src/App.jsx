import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
    return (
        <div className='min-h-screen  px-5 md:px-32'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App