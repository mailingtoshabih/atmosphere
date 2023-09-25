import React from 'react'
import { Hero } from '../components/Hero'
import { Blurry } from '../components/Blurry'


export const Main = () => {
    return (
        <>

            <div>

                <div className=' 
                    w-full
                    mx-auto
                    font-sora'>

                    <div className='w-full'>
                        <Hero />
                    </div>

                </div>

            </div>



            <div className='absolute w-full -top-36 -z-10'>
                <Blurry />
            </div>
            <div className='absolute w-full pt-80 top-60  -z-10'>
                <Blurry />
            </div>

        </>
    )
}
