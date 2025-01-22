import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import Home from '../assets/home2.jpg'
import Home2 from '../assets/home3.jpg'
import TravelIllustration from '../assets/hero2.jpg'

const Hero = () => {
    return (
        <>
            <section className='pt-28 mb-12 md:px-8 flex gap-4 flex-wrap justify-center md:justify-around'>

                {/* section 1 */}
                <div>
                    {/* heading */}
                    <div className='mb-8 px-9 md:px-0'>
                        <h4 className='text-white text-4xl font-thin'>Hostel</h4>
                        <h4 className='text-6xl uppercase font-bold bg-gradient-to-r from-white to-zinc-400 inline-block text-transparent bg-clip-text'>Bookings</h4>
                    </div>

                    {/* hero cards */}
                    <div className='flex flex-wrap-reverse justify-center gap-4'>

                        {/* card 1 */}
                        <div className='flex flex-col gap-5'>
                            <div className='h-52 w-52 hidden md:block bg-zinc-800 mt-6 rounded-2xl p-3 zoom cursor-pointer'>

                                <h6 className='text-zinc-400'>Check Availibility</h6>

                                <div className='flex flex-col gap-6 mt-3 mb-4'>
                                    <div className='text-green-400 flex gap-2 items-center'>
                                        <GoDotFill />
                                        <p className='text-zinc-300'>Available</p>
                                    </div>
                                    <div className='text-red-500 flex gap-2 items-center'>
                                        <GoDotFill />
                                        <p className='text-zinc-300'>Not Available</p>
                                    </div>
                                </div>

                                <hr />

                                <div className='mt-4 flex justify-around'>
                                    <div>
                                        <p className='text-xs text-zinc-200'>Properties</p>
                                        <p className='text-white'>280k+</p>
                                    </div>
                                    <div>
                                        <p className='text-xs text-zinc-200'>Bookings</p>
                                        <p className='text-white'>30k+</p>
                                    </div>
                                </div>

                            </div>

                            {/* card 2 */}
                            <div className='w-52 h-[6rem] hidden md:flex bg-white rounded-2xl overflow-hidden relative justify-center zoom cursor-pointer'>
                                <div className='h-[5rem] w-[5rem] rounded-full bg-pink-500 absolute -bottom-8 -right-4'>
                                </div>

                                <h2 className='mt-8 text-3xl font-semibold z-10'>BOOKME.in</h2>

                                <div className='h-[5rem] w-[5rem] rounded-full bg-purple-500 absolute -top-8 -left-4'>
                                </div>
                            </div>

                        </div>
                        {/* card 3 */}
                        <div className='mt-6'>
                            <p className='w-72 text-white text-sm mb-5 md:mb-0'>Discover and book your perfect hostel with ease at BOOKME.in. Enjoy a modern, intuitive user interface(UI).</p>

                            {/* card 2 */}
                            <div className='h-64 w-72 bg-white mt-3 rounded-2xl px-4 py-2 flex flex-col justify-around'>

                                <h2 className='text-xl font-semibold'>Our Features</h2>

                                {/* feature 1 */}
                                <div className='w-64 h-20 rounded-2xl bg-zinc-800 py-2 px-2 flex items-center gap-4 zoom cursor-pointer'>

                                    <div className='h-12 w-12 bg-white text-purple-500 rounded-full flex justify-center items-center'>
                                        <HiOutlineDevicePhoneMobile size={'1.8rem'} />
                                    </div>

                                    <div>
                                        <h2 className='text-white'>Modern UI</h2>
                                        <p className='text-xs w-44 text-zinc-400'>A clean design with one-click bookings.</p>
                                    </div>

                                </div>

                                {/* feature 2 */}
                                <div className='w-64 h-20 rounded-2xl bg-zinc-800 py-2 px-2 flex items-center gap-4 zoom cursor-pointer'>

                                    <div className='h-12 w-12 bg-white text-pink-500 rounded-full flex justify-center items-center'>
                                        <TbDeviceDesktopSearch size={'1.8rem'} />
                                    </div>
                                    <div>
                                        <h2 className='text-white'>Easy Search</h2>
                                        <p className='text-xs w-44 text-zinc-400'>Allow user to search for hostel across all cities.</p>
                                    </div>

                                </div>


                            </div>

                        </div>

                        {/* card 4 */}
                        <div className='flex flex-col gap-4 cursor-pointer'>

                            <div className='w-72 h-56 rounded-2xl overflow-hidden'>
                                <img src={TravelIllustration} alt="heroImg" className='w-72 h-56 rounded-2xl zoomImg' />
                            </div>

                            <div className='w-72 h-28 rounded-2xl bg-white py-4 px-4 flex flex-col gap-2 cursor-pointer zoom'>

                                <h2 className='text-xl font-semibold'>Stay Longer, see more</h2>
                                <div className='flex items-center gap-4'>
                                    <h1 className='text-4xl font-semibold'>Book Now  </h1>
                                    <FaArrowRight size={'2rem'} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* section 2 */}
                <div className='flex flex-col md:gap-2 gap-4'>

                    <div className='border-for-img bg-white h-72 md:h-[15rem] w-72 md:w-[15rem] overflow-hidden cursor-pointer'>
                        <img src={Home} alt="home" className='h-72 md:h-[15rem] w-72 md:w-[15rem] zoomImg' />
                    </div>

                    <div className='border-for-img2 bg-white h-72 md:h-[15rem] w-72 md:w-[15rem] overflow-hidden cursor-pointer'>
                        <img src={Home2} alt="home" className='md:h-[15rem] h-72 w-72 md:w-[15rem] zoomImg' />
                    </div>


                </div>

            </section>
        </>
    )
}

export default Hero