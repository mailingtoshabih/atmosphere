import React from 'react'

export const Blurry = ({ color }) => {


    return (


        <div className='grid grid-cols-6 gap-1 
        animate-pulse 
        ' >

            <div className='-mr-32 h-60  rounded-full border
    bg-red-300 mix-blend-multiply filter blur-xl opacity-40'>
            </div>

            <div className='mt-20 h-60 w-autt rounded-full border
    bg-pink-300 mix-blend-multiply filter blur-xl opacity-70'>
            </div>

            <div className='-ml-32 h-60 w-auto rounded-full border
    bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70'>
            </div>

            <div className='-mr-32 h-60 w-auto rounded-full border
    bg-violet-300 mix-blend-multiply filter blur-xl opacity-70'>
            </div>

            <div className='mt-20 h-60 w-auto rounded-full border
    bg-yellow-300 mix-blend-multiply filter blur-xl opacity-70'>
            </div>

            <div className='-ml-32 h-60 w-auto rounded-full border
    bg-rose-300 mix-blend-multiply filter blur-xl opacity-70'>
            </div>

        </ div>
    )
}
