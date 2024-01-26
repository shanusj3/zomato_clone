import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ recipes }) => {

    return (
        <Link to={`recipe-item/${recipes.id}`} className='p-5 rounded-xl mt-9 mb-20 w-72 cursor-pointer hover:shadow-xl' >
            <img className='h-64  w-full rounded-lg' src={recipes.image_url} alt="" />
            <h1 className='text-xl mt-3 font-medium text-blackPr'>{recipes.publisher}</h1>
            <span className='w-full flex justify-between'>
                <p className='text-lg text-blackSe'>{recipes.title}</p>
                {/* <p className='text-lg text-blackSe'>{recipes.price}</p> */}
            </span>

        </Link>
    )
}

export default ItemCard