import React from 'react'

const FoodSliderItem = ({ value }) => {
    return (
        <div className='cursor-pointer'>
            <img src={value.url} alt={value.name} className='rounded-full w-44 h-44' />
            <p className='text-xl font-medium text-blackPr text-center mt-3'>{value.name}</p>
        </div>
    )
}

export default FoodSliderItem