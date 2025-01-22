import React from 'react'
import HomeImg from '../assets/home.jpg'
import { GrNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const PropertyList = () => {
    return (
        <>
            <section className='w-full h-auto md:px-8 px-4 mt-10'>

                {/* property nav */}
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-sm md:text-xl text-white font-semibold md:px-4'>Explore <br className='md:hidden block' /> Hostels</h2>

                    <div className='relative'>
                        <input type="text" className='w-44 md:w-72 h-10 px-3 text-white border border-gray-600 rounded-lg bg-transparent transition-all duration-500 outline-none hover:ring-2 hover:ring-zinc-600' placeholder='Search' />

                        {/* search icon */}
                        <div className='h-10 w-10 bg-black rounded-r-lg text-lg md:text-2xl text-white absolute top-0 right-0 flex justify-center items-center border-r border-t border-b border-gray-600'>
                            <IoSearchOutline />
                        </div>

                    </div>

                </div>

                <div className='flex flex-wrap gap-5 justify-around '>

                    {/* property card */}
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>
                    <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

                        {/* like btn */}
                        <div className='text-xl text-white cursor-pointer absolute z-20 top-4 right-4'>
                            <FaRegHeart />
                        </div>

                        {/* property img */}
                        <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

                        {/* property info */}
                        <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-20 py-2 px-4 flex flex-col justify-around'>

                            {/* property name & availibility */}
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-semibold'>Triveni Hostel</h2>
                                <div className='text-xl text-green-500 flex items-center'>
                                    <GoDotFill />
                                    <span className='text-xs'>Available</span>
                                </div>
                            </div>

                            {/* property discreption */}
                            <p className='text-sm'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

                            {/* property price */}
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>₹900<span className='text-xs text-zinc-500'>/Per student</span></p>

                                {/* click btn for more info btn */}
                                <button className='h-8 w-8 bg-black rounded-lg text-white flex justify-center items-center'>
                                    <GrNext />
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='flex justify-center m-10'>
                    <button className='h-12 px-5 py-2 rounded-3xl bg-white hover:bg-zinc-200 text-black font-semibold transition-all duration-300 flex gap-2 items-center'>Load More <FaArrowRight /> </button>
                </div>

            </section>
        </>
    )
}

export default PropertyList