import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../context'
import { data } from 'autoprefixer'

const DetailsPage = () => {
    const { AddToFavarite } = useProduct()
    const [selectedItem, setSelectedItem] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {

            const res = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = res.data.data

            const recipe = data.recipe



            if (recipe) {
                setSelectedItem(recipe)
            }

            // console.log(data.title);
        }
        fetchData()
    }, [])

    return (
        selectedItem !== null && <div className='mt-9 bg-[#F8F8F8] px-3 md:px-36'>
            <div className='flex flex-col md:flex-row gap-6'>
                <img src={selectedItem.image_url} className='md:w-96' alt="" />
                <div>
                    <h1 className='text-3xl font-medium text-black'>{selectedItem.title}</h1>
                    <p className='text-xl text-blackPr mt-4'>{selectedItem.publisher}</p>
                    <button className='mt-5 p-3 px-9 bg-red-600 text-lg font-medium text-white rounded-lg' onClick={() => AddToFavarite(selectedItem)}>Add to Cart</button>
                </div>
            </div>


        </div>

    )
}

export default DetailsPage