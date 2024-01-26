import React from 'react'
import { useProduct } from '../context'
import ItemCard from '../components/ItemCard'

const SearchPage = () => {
    const { products } = useProduct()
    return (
        <div className='mt-9 bg-[#F8F8F8] px-3 md:px-36'>
            <div className='flex flex-wrap items-center justify-center md:justify-between' >
                {
                    products.map((item) => (

                        <ItemCard recipes={item} key={item.id} />

                    ))
                }
            </div >
        </div >

    )
}

export default SearchPage