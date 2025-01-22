import React from 'react'
import mapImg from '../assets/map.png'
import { GoDotFill } from "react-icons/go";

const Promotion = () => {
    return (
        <>

            <section className='h-auto md:h-[34rem] w-full flex flex-wrap-reverse justify-around items-center md:relative overflow-hidden mt-6 px-2 py-4 border-t border-b border-dashed border-zinc-600'>

                {/* map image */}
                <img src={mapImg} alt="mapImg" className='h-[20rem] md:h-[24rem] rounded-3xl zoomImg' />

                {/* promotions */}
                <div className='flex flex-col gap-5 z-10 text-white mb-10 md:mb-0'>

                    <h2 className='text-3xl font-semibold text-center md:text-start'>There's a BOOKME.in around. Always.</h2>

                    <p className='md:text-lg font-thin text-center md:text-start'>More Destinations. More Ease. More Affordable</p>

                    <div className='flex justify-center md:justify-normal gap-20'>
                        <div>
                            <h2 className='text-4xl font-semibold'>10+</h2>
                            <p className='text-white'>States</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-semibold'>2000+</h2>
                            <p className='text-white'>Hostels/Properties</p>
                        </div>
                    </div>

                    {/* states */}
                    <div className='flex justify-center md:justify-normal gap-20'>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 text-green-400'>
                                <GoDotFill />
                                <h2 className='text-white font-semibold'>Maharashtra</h2>
                            </div>
                            <div className='flex items-center gap-2 text-pink-400'>
                                <GoDotFill />
                                <h2 className='text-white font-semibold'>Kerala</h2>
                            </div>
                            <div className='flex items-center gap-2 text-purple-400'>
                                <GoDotFill />
                                <h2 className='text-white font-semibold'>Karnatak</h2>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 text-sky-400'>
                                <GoDotFill />
                                <h2 className='text-white font-semibold'>Tamilnadu</h2>
                            </div>
                            <div className='flex items-center gap-2 text-red-400'>
                                <GoDotFill />
                                <h2 className='text-white font-semibold'>Uttarpradesh</h2>
                            </div>
                            <div className='flex items-center gap-2 text-blue-400'>
                                <GoDotFill />
                                <h2 className='text-white font-semibold'>Gujrat</h2>
                            </div>
                        </div>

                    </div>

                </div>

                {/* shapes */}

                <div className='hidden md:block h-52 w-52 bg-white rounded-full absolute bottom-8 -right-10 zoomImg'>
                </div>

                <div className='hidden md:block h-72 w-32 bg-blue-500 rounded-[5rem] absolute top-10 zoomImg'>
                </div>

                <div className='hidden md:block h-32 w-72 bg-orange-500 rounded-[5rem] absolute top-10 right-0 zoomImg'>
                </div>

            </section>

        </>
    )
}

export default Promotion