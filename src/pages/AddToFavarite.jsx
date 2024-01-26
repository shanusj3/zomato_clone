import React from 'react'
import ItemCard from '../components/ItemCard'
import { useProduct } from '../context'

const AddToFavarite = () => {
    const { favarite } = useProduct()
    console.log(favarite);
    return (
        <div className='mt-9 bg-[#F8F8F8] px-3 md:px-36'>
            <div className='flex flex-wrap items-center justify-center md:justify-between'>
                {
                    favarite && favarite.length > 0 ? (
                        favarite.map((val) => (
                            <ItemCard recipes={val} />
                        ))
                    ) : (<p>No products</p>)
                }
            </div>
        </div>
    )
}

export default AddToFavarite