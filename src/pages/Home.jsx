import React from 'react'
import { useProduct } from '../context'
import ItemCard from '../components/ItemCard'
import Message from '../components/Message'

const Home = () => {
    const { products, setProducts } = useProduct()
    return (
        <div className='mt-9 bg-[#F8F8F8] px-3 md:px-36'>
            {
                products && products.length > 0 ? <ItemCard /> : (
                    <Message message="No items found" />
                )
            }
        </div>
    )
}

export default Home