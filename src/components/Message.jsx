import React from 'react'
import MessageImg from "/assets/z404x2.avif"

const Message = ({ message }) => {
    return (
        <div className='w-full p-3 flex flex-col gap-2 items-center justify-center'>
            <img src={MessageImg} alt="" width={400} height={200} />
            <p className='text-blackSe'> {message}</p>

        </div>
    )
}

export default Message