import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'
import AddToFavarite from './pages/AddToFavarite'

const App = () => {
    return (
        <div className='min-h-screen bg-[#F8F8F8]'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/recipe-item/:id' element={<DetailsPage />} />
                <Route path='/cart' element={<AddToFavarite />} />
            </Routes>
        </div>
    )
}

export default App