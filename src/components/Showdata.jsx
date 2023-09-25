import React from 'react'

export const Showdata = ({ data, value, unit }) => {






    return (
        <div className='
        p-5
        border
        text-gray-600
        bg-white z-10
        rounded-2xl
        shadow-2xl shadow-white
        
        place-items-center
        '>
            <p className='text-xl font-semibold '>
                {data && data}
            </p>

            <div className='text-4xl sm:text-7xl font-bold'>
                {value && value}
            </div>

            <p className='text-sm'>
                {unit}
            </p>



        </div>
    )
}
