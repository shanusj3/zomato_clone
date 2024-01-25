import React, { isValidElement } from 'react'
import { CiSearch } from "react-icons/ci";
import { GiScooter } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useProduct } from '../context';

const Navbar = () => {
    const { searchParam, setSearchParam, handleSearch } = useProduct()
    return (
        <nav className='px-3 md:px-36 bg-white'>
            <div className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
                <span><h1 className='text-4xl font-extrabold italic text-blackCol'>zomato</h1></span>
                <form onSubmit={handleSearch} className='w-full md:max-w-md gap-3 py-4 flex items-center shadow-md px-3 rounded-md border-[1px]'>
                    <CiSearch className='text-3xl text-blackSe font-medium' />
                    <input type="text" placeholder='Search for a dish' className='w-full outline-none text-blackPr' value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
                </form>
                <div className='flex gap-4'>
                    <NavLink to="/" className="text-lg text-blackSe hover:text-blackPr">Home</NavLink>
                    <NavLink to="/cart" className="text-lg text-blackSe hover:text-blackPr">Cart</NavLink>
                </div>
            </div>
            <div className='flex gap-4 items-center border-b-4 border-b-redCol w-60 p-3'>
                <span className='h-16 w-16 rounded-[50%] bg-[#FCEEC0] flex items-center justify-center'>
                    <GiScooter className='text-3xl' />
                </span>
                <span><p className='font-medium text-xl text-redCol '>Delivery</p></span>
            </div>
        </nav>
    )
}

export default Navbar