import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeImg from '../assets/home.jpg'
import { GrNext } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

const propertyDetails = () => {

  // toogle form
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>

      {/* mobile view */}
      <section className='block md:hidden h-screen relative'>
        <img src={HomeImg} alt="image" className='fixed top-0 left-0 right-0 w-full h-[50vh] zoomImg' />

        {/* back to home btn */}
        <NavLink
          to='/'
          className='bg-black hover:bg-zinc-800 h-10 w-10 text-white fixed top-2 left-2 z-10 cursor-pointer rounded-full transition-all duration-300 flex justify-center items-center text-xl'>
          <IoArrowBack />
        </NavLink>

        {/* appointment form */}
        {showForm && (
          <div className='h-[120vh] w-full bg-black bg-opacity-[24%] absolute z-[25] transition-transform duration-300'>

            <div className='h-auto mt-44 w-[324px] m-4 bg-white fixed z-30 rounded-3xl py-8 flex gap-8 flex-col items-center transition-transform duration-300'>

              <h2 className='text-xl text-black font-semibold'>Book Appointment</h2>

              {/* cancel btn */}
              <button onClick={toggleForm} className='fixed top-[12.4rem] right-10 text-xl text-black'>
                <RxCross1 />
              </button>

              <form action="" className='flex flex-col gap-4'>

                <input type="text" name='name' className='w-[260px] h-10 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='Name' />

                <input type="text" name='phone_no' className='w-[260px] h-10 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='Phone No' />

                <input type="text" name='date' className='w-[260px] h-10 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='dd/mm/yyyy' />

                <textarea type="text" name='message' className='w-[260px] h-32 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='Message' ></textarea>

                <button className='w-full py-2 bg-black text-white hover:bg-zinc-800 rounded-xl'>Submit</button>

              </form>

            </div>
          </div>
        )}

        {/* room info */}
        <div className='w-full h-[70vh] bg-zinc-950 absolute top-[44vh] z-20 rounded-t-3xl p-4 flex flex-col justify-around'>

          <div className='flex justify-between items-center'>

            <h2 className='capitalize text-3xl text-white font-semibold'>triveni Hostel</h2>

            {/* availibility */}
            <div className='text-xl mt-1 text-green-500 flex items-center'>
              <GoDotFill />
              <span className='text-sm'>Available</span>
            </div>
          </div>

          {/* property discreption */}
          <p className='text text-white'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location.</p>

          {/* adress */}
          <div>
            <h6 className='text-lg text-white font-thin flex gap-2 items-center'>
              <CiLocationOn />
              Adress
            </h6>
            <p className='text-white'>Ramnagar, Satara(MH).</p>
          </div>

          {/* phone no */}
          <div>
            <h6 className='text-lg text-white font-thin flex gap-2 items-center'>
              <IoPhonePortraitOutline />
              Phone no.
            </h6>
            <p className='text-white'>+91 764525388</p>
          </div>

          {/* property amenities */}
          <div>
            <h6 className='text-lg text-white font-thin'>Rooms Amenities</h6>
            <div className='text-zinc-400 flex gap-6'>
              <div>
                <p className='flex gap-2 items-center'>
                  <GoDotFill />
                  2 Bedrooms
                </p>
                <p className='flex gap-2 items-center'>
                  <GoDotFill />
                  1 Bathroom
                </p>
              </div>
              <div>
                <p className='flex gap-2 items-center'>
                  <GoDotFill />
                  24*7 Water Supply
                </p>
                <p className='flex gap-2 items-center'>
                  <GoDotFill />
                  Friendly Enviroment
                </p>
              </div>
            </div>
          </div>

          {/* property price */}
          <div className='flex justify-between'>
            <p className='text-3xl font-semibold text-white'>₹900<span className='text-xs text-zinc-400'>/Per student</span>
            </p>
            <div className='flex flex-col text-white'>
              <p className='text-xs'>Capacity</p>
              <h4 className='text-sm text-zinc-400'>4 Students</h4>
            </div>
          </div>

          {/* button */}
          <div className='flex justify-center'>
            <button onClick={toggleForm} className='w-64 h-10 bg-white hover:bg-zinc-200 rounded-lg uppercase font-semibold transition-all duration-300 flex gap-3 justify-center items-center hover:gap-4'>
              Book Visit
              <GrNext />
            </button>
          </div>

        </div>

      </section>

      {/* desktop view */}
      <div className='hidden md:block'>

        <Navbar />

        <section className='px-10 py-7 mt-28 flex gap-6 relative'>

          {/* appointment form */}
          {showForm && (

            <form action="" className='h-[32rem] w-[28rem] rounded-3xl bg-zinc-900 absolute top-1 left-[50%] z-[15] py-4 px-4 flex flex-col gap-8'>

              <div className='relative'>
                {/* cancel btn */}
                <button onClick={toggleForm} className='absolute top-2 right-4 text-xl text-white hover:text-red-500 transition-all duration-300'>
                  <RxCross1 />
                </button>
              </div>

              <h2 className='text-2xl text-white text-center font-semibold'>Appointment Form</h2>

              <div className='flex flex-col justify-center items-center gap-6'>

                <input type="text" name='name' className='w-[340px] h-10 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded bg-transparent' placeholder='Name' />

                <input type="text" name='phone' className='w-[340px] h-10 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded bg-transparent' placeholder='Phone No' />

                <textarea name="message" id="message" placeholder='Message' className='w-[340px] h-40 px-2 text-white border border-zinc-500 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded bg-transparent'></textarea>

                <button className='w-[340px] py-2 bg-white text-black uppercase font-semibold hover:bg-zinc-200 rounded-lg transition-all duration-300'>Submit</button>

              </div>

            </form>

          )}

          {/* image */}
          <div className='flex flex-col gap-6'>

            <div className='h-[28rem] w-[35rem] bg-white rounded-3xl relative'>

              <img src={HomeImg} alt="image" className='h-[28rem] w-[35rem] rounded-3xl' />

              {/* previous btn */}
              <button className='h-8 w-8 bg-black bg-opacity-[40%] hover:bg-opacity-[50%] text-lg text-white absolute z-10 left-1 top-[14rem] rounded-full flex justify-center items-center rotate-180 transition-all duration-300'>
                <GrNext />
              </button>

              {/* next btn */}
              <button className='h-8 w-8 bg-black bg-opacity-[40%] hover:bg-opacity-[50%] text-lg text-white absolute z-10 right-1 top-[14rem] rounded-full flex justify-center items-center transition-all duration-300'>
                <GrNext />
              </button>

            </div>



          </div>

          {/* property details */}
          <div className='flex flex-col justify-around'>

            {/* hostel name */}
            <h2 className='text-4xl text-white font-semibold'>Triveni Hostel</h2>

            {/* availibility */}
            <div className='flex gap-20'>
              <div className='text-xl mt-1 text-green-500 flex items-center'>
                <GoDotFill />
                <span className='text-sm'>Available</span>
              </div>
              <div className='flex flex-col text-white'>
                <p className='text-xs'>Capacity</p>
                <h4 className='text-sm text-zinc-400'>4 Students</h4>
              </div>
            </div>

            {/* discreption */}
            <p className='text text-zinc-500'>we offers affordable, comfortable stays with modern amenities and a friendly atmosphere, all in a prime city location. Lorem ipsum dolor sit amet consectetur, adipisicing elit.

            </p>

            {/* price */}
            <h2 className='text-3xl text-white font-semibold'>900 <span className='text-sm text-zinc-500'>/per student</span></h2>

            {/* adress */}
            <div className='flex gap-4'>

              <div className='w-72'>
                <h6 className='text-lg text-white font-thin flex gap-2 items-center'>
                  <CiLocationOn />
                  Adress
                </h6>
                <p className='text-zinc-500'>Ramnagar, Satara(MH).</p>
              </div>

              {/* phone no */}
              <div>
                <h6 className='text-lg text-white font-thin flex gap-2 items-center'>
                  <IoPhonePortraitOutline />
                  Phone no.
                </h6>
                <p className='text-zinc-500'>+91 764525388</p>
              </div>

            </div>

            {/* property amenities */}
            <div>
              <h6 className='text-lg text-white font-thin'>Rooms Amenities</h6>
              <div className='text-zinc-400 flex gap-6'>
                <div>
                  <p className='flex gap-2 items-center'>
                    <GoDotFill />
                    2 Bedrooms
                  </p>
                  <p className='flex gap-2 items-center'>
                    <GoDotFill />
                    1 Bathroom
                  </p>
                </div>
                <div>
                  <p className='flex gap-2 items-center'>
                    <GoDotFill />
                    24*7 Water Supply
                  </p>
                  <p className='flex gap-2 items-center'>
                    <GoDotFill />
                    Friendly Enviroment
                  </p>
                </div>
              </div>
            </div>

            {/* button */}
            <div className=''>
              <button onClick={toggleForm} className='w-60 h-10 bg-white hover:bg-zinc-200 rounded-lg uppercase font-semibold transition-all duration-300 flex gap-3 justify-center items-center hover:gap-4'>
                Book Visit
                <FaArrowRight />
              </button>
            </div>


          </div>

        </section>

        <Footer />

      </div>

    </>
  )
}

export default propertyDetails