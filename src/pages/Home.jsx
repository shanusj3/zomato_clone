import React, { useEffect, useState } from 'react'
import { useProduct } from '../context'
import ItemCard from '../components/ItemCard'
import Message from '../components/Message'
import FoodSlider from '../components/FoodSlider'
import axios from 'axios'
import { data } from 'autoprefixer'

const Home = () => {
    const { products, setProducts, show } = useProduct()
    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://forkify-api.herokuapp.com/api/v2/recipes?search=chicken')
            if (res.data) {
                setProducts((res.data.data.recipes))
            }


        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className='mt-9 bg-[#F8F8F8] px-3 md:px-36'>{
            show && (
                <>
                    <h1 className='text-3xl text-blackCol font-medium'>Inspiration for your first order</h1>
                    <div>
                        <FoodSlider />
                    </div>
                </>
            )
        }

            <h1 className='text-3xl text-blackCol font-medium mt-12'> Best Food for you</h1>
            <div className='flex flex-wrap items-center justify-center md:justify-between'>


                {
                    products.map((item) => (

                        <ItemCard recipes={item} key={item.id} />

                    ))
                }
            </div>






        </div>
    )
}

export default Home