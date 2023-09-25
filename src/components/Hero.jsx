import { useState, useEffect } from 'react'
import axios from 'axios';
import cloudy from "../assets/cloudy.png"
import { Showdata } from './Showdata';
import { Blurry } from './Blurry';
import { Loading } from './Loading';




function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ["paris", "bangalore", "kolkata", "dubai", "mumbai"];





export const Hero = () => {

    const [search, setSearch] = useState(getRandomItem(array));
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);



    const handleSubmit = async (e = null) => {
        e && e.preventDefault();
        if (!search) return;

        axios.get(`http://localhost:3000/weather/${search}`)
            .then((res) => {
                setData(res.data);
                setSearch(null);
            })
            .catch((e) => {
                setSearch("Invalid city...");
                setTimeout(() => {
                    setSearch("");
                }, 1000);
            });
    }


    useEffect(() => {
        scrollTo(0, 0);
        handleSubmit();
    }, []);



    return (

        <div className={`w-full`}>
            {
                data && !error ?

                    <div className='w-full p-2 sm:p-10 
                        text-center 
                        mx-auto'>

                        <h1 className='text-5xl
                        text-gray-600
                        font-bold
                        '>
                            Atmosphere
                        </h1>


                        <form onSubmit={handleSubmit}
                            className='mt-16
                            w-full px-3
                            bg-white  border-4 border-red-300
                            flex  
                            rounded-full'>

                            <input
                                className={`py-5
                                    px-10 
                                    text-center
                                    w-full
                                    bg-white
                                    ${search === "Invalid city..." ? "text-red-400" : "text-gray-400"}
                                    font-semibold
                                    outline-none
                                    placeholder:text-gray-400
                                    rounded-full`}
                                maxLength={25}
                                placeholder='City...'
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                value={search || ""}
                                onClick={() => setSearch("")} />


                            <div className='my-auto cursor-pointer pr-1' onClick={handleSubmit}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={5.0} stroke="currentColor"
                                    className="w-8 h-8 text-green-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>

                        </form>





                        <div className='my-20
                            w-full
                            grid gap-5
                            grid-cols-2
                            lg:grid-cols-3
                            place-items-center'>


                            <div className=''>

                                <div className='h-fit text-7xl text-gray-600 my-auto'>
                                    <p>
                                        {data?.current?.temp_c}°C
                                    </p>
                                    <p className='text-blue-400 text-5xl font-bold'>
                                        {data?.current?.temp_f}°F
                                    </p>
                                </div>

                                <div>
                                    <p>21 July, 2019</p>
                                    <p className='font-bold'>
                                        {data?.current?.localtime}
                                    </p>

                                </div>

                            </div>


                            <img
                                src={data?.current?.condition?.text && cloudy}
                                alt="cloud"
                                className='w-48 sm:w-60 h-fit mx-auto'
                            />


                            <div className='
                                text-7xl text-center
                                text-gray-600 '>

                                <p>
                                    {data?.location?.localtime.slice(10)}
                                </p>


                                <div className='text-3xl text-black font-semibold'>
                                    <p>
                                        {data?.location?.name}
                                    </p>
                                    <p className='text-gray-400 text-xl'>
                                        {data?.location?.region} <br />
                                        {data?.location?.country}
                                    </p>
                                </div>

                            </div>

                            <div className='block lg:hidden text-4xl
                                text-center
                                text-gray-600 
                                p-2 px-6 w-full rounded-xl
                                space-y-5'>

                                <p className='font-semibold'>
                                    {data?.current?.condition?.text}
                                </p>

                                <div className='flex justify-between space-x-4'>
                                    <p className='text-xl'>Feels Like</p>
                                    <p className='text-2xl text-blue-400'>
                                        {data?.current?.feelslike_c}°C / {data?.current?.feelslike_f}°F
                                    </p>
                                </div>

                            </div>

                        </div>


                        <div className='hidden 
                            w-full max-w-5xl mx-auto
                            lg:flex justify-between 
                            px-10
                            p-2 my-5
                            space-x-4'>
                            <p className='my-auto font-semibold text-3xl text-gray-600'>
                                {data?.current?.condition?.text}
                            </p>

                            <div>
                                <p className='text-xl 
                                 font-semibold text-gray-600'>
                                    Feels Like
                                </p>
                                <p className='text-2xl text-blue-400'>
                                    {data?.current?.feelslike_c}°C / {data?.current?.feelslike_f}°F
                                </p>
                            </div>
                        </div>


                        <div className='gap-5 grid
                            grid-cols-2
                            md:grid-cols-3'>

                            <Showdata data={"Humidity"} value={data?.current?.humidity} />
                            <Showdata data={"UV Index"} value={data?.current?.uv} />
                            <Showdata data={"Cloud"} value={data?.current?.cloud} unit={"%"} />
                            <Showdata data={"Precipitation"} value={data?.current?.precip_mm} unit={"mm"} />
                            <Showdata data={"Pressure"} value={data?.current?.pressure_mb} unit={'mb'} />
                            <Showdata data={"Wind"} value={data?.current?.wind_kph} unit={"km"} />
                        </div>

                    </div>

                    :

                    <Loading error={error && error} />
            }

        </div>
    )
}
