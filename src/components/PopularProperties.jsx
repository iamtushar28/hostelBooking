import React from 'react';
import HomeImg from '../assets/home.jpg'
import { GrNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

const PopularProperties = () => {
    return (
        <>

            <section className='flex flex-col justify-around h-[27rem] md:px-4 px-1'>

                <h2 className='text-xl text-white font-semibold px-4'>Most Popular</h2>

                {/* property list horizontal */}
                <div className='scroll-container'>

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


                </div>

            </section>

        </>
    )
}

export default PopularProperties