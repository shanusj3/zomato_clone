import React from 'react'
import { FoodData } from '../data/data'
import FoodSliderItem from './FoodSliderItem'


const FoodSlider = () => {

    return (
        <div className='w-full flex  flex-wrap items-center justify-between gap-6 mt-8'>
            {
                FoodData && FoodData.length > 0 ? (
                    FoodData.map((data) => <FoodSliderItem key={data.name} value={data} />)

                ) : null
            }

        </div >
    )
}

export default FoodSlider