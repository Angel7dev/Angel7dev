import React from 'react'

const Card = ({ i }) => {
    return (
        <div className='flex flex-col justify-center'>
            <div className='mx-auto bg-slate-400 p-6 rounded-full fill-white'>
                <img src={i.image} alt={i.name} />
            </div>
            <h1 className="font-bold text-3xl text-center mb-1">{i.name}</h1>
            <p className="text-center text-gray-100 text-base pt-3 font-normal">
                {i.description}
            </p>
        </div>

    )
}

export default Card