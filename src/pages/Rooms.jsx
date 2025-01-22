import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar'
import { GrNext } from "react-icons/gr";
import HomeImg from '../assets/home.jpg'
import { GoDotFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsFilterLeft } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


const Rooms = () => {

  const [showFilter, setFilter] = useState(true);
  const [showCityFilter, setCityFilter] = useState(false);
  const [showPTypeFilter, setPtypeFilter] = useState(false);
  const [showPriceFilter, setPriceFilter] = useState(true);

  const toogleFilter = () => {
    setFilter(!showFilter);
  };
  const toogleCityFilter = () => {
    setCityFilter(!showCityFilter);
  };
  const tooglePTypeFilter = () => {
    setPtypeFilter(!showPTypeFilter);
  };
  const tooglePriceFilter = () => {
    setPriceFilter(!showPriceFilter);
  };

  return (
    <div>

      <Navbar />

      {/* desktop sidebar filter */}
      <section className='hidden md:block h-full w-72 md:w-64 fixed z-20 top-20 bottom-0 left-0 bg-zinc-900 p-6 transition-all duration-300'>

        <h2 className='text-xl font uppercase text-white'>Filter</h2>

        {/* property type */}
        <div>

          <div className='mt-4 flex justify-between'>
            <h2 className='text-white font-semibold'>Property type</h2>
            <button onClick={tooglePTypeFilter} className={`text-white font-xl ${showPTypeFilter ? '-rotate-90' : 'rotate-90'} h-8 w-8 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300`}>
              <GrNext />
            </button>
          </div>

          <form className={`mt-2 ${showPTypeFilter ? 'hidden' : 'block'}`}>

            <ul>

              <li className='flex items-center gap-4'>
                <input type="checkbox" name='hostel' id='hostel' />
                <label htmlFor="hostel" className='text-white font-thin'>Hostel</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='pg' id='pg' />
                <label htmlFor="pg" className='text-white font-thin'>PG</label>
              </li>

            </ul>

          </form>

        </div>

        {/* property city */}
        <div>

          <div className='mt-6 flex justify-between'>
            <h2 className='text-white font-semibold'>City</h2>
            <button onClick={toogleCityFilter} className={`text-white font-xl ${showCityFilter ? '-rotate-90' : 'rotate-90'} h-8 w-8 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300`}>
              <GrNext />
            </button>
          </div>

          <form className={`mt-2 ${showCityFilter ? 'hidden' : 'block'}`}>

            <ul>

              <li className='flex items-center gap-4'>
                <input type="checkbox" name='satara' id='satara' />
                <label htmlFor="satara" className='text-white font-thin'>Satara</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='wai' id='wai' />
                <label htmlFor="wai" className='text-white font-thin'>Wai</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='pimpari' id='pimpari' />
                <label htmlFor="pimpari" className='text-white font-thin'>Pimpari-Chinchvad</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='pune' id='pune' />
                <label htmlFor="pune" className='text-white font-thin'>Pune</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='kolhapur' id='kolhapur' />
                <label htmlFor="kolhapur" className='text-white font-thin'>Kolhapur</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='karad' id='karad' />
                <label htmlFor="karad" className='text-white font-thin'>Karad</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='patan' id='patan' />
                <label htmlFor="patan" className='text-white font-thin'>Patan</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='mumbai' id='mumbai' />
                <label htmlFor="mumbai" className='text-white font-thin'>Mumbai</label>
              </li>

            </ul>

          </form>

        </div>

        {/* price */}
        <div>

          <div className='mt-6 flex justify-between'>
            <h2 className='text-white font-semibold'>Price</h2>
            <button onClick={tooglePriceFilter} className={`text-white font-xl ${showPriceFilter ? '-rotate-90' : 'rotate-90'} h-8 w-8 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300`}>
              <GrNext />
            </button>
          </div>

          <form className={`mt-2 transition-all duration-500 ${showPriceFilter ? 'hidden' : 'block'}`}>

            <ul>

              <li className='flex items-center gap-4'>
                <input type="checkbox" name='low_high' id='low_high' />
                <label htmlFor="low_high" className='text-white font-thin'>Low-High</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='high_low' id='high_low' />
                <label htmlFor="high_low" className='text-white font-thin'>High-Low</label>
              </li>

            </ul>

          </form>

        </div>

        {/* button */}
        <button className='w-full h-10 mt-10 bg-white hover:bg-zinc-200 rounded-lg uppercase font-semibold transition-all duration-300'>
          Apply Filter
        </button>

      </section>

      {/* mobile sidebar */}
      <section className={`h-full w-72 block md:hidden md:w-64 fixed z-20 top-20 bottom-0 left-0 bg-zinc-900 p-6 transition-all duration-300
         ${showFilter ? '-ml-[100%]' : ''} `}>

        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-xl font uppercase text-white'>Filter</h2>
          <button onClick={toogleFilter} className='text-xl text-white font-semibold md:hidden h-9 w-9 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300'>
            <RxCross1 />
          </button>
        </div>

        {/* property type */}
        <div>

          <div className='mt-4 flex justify-between'>
            <h2 className='text-white font-semibold'>Property type</h2>
            <button onClick={tooglePTypeFilter} className={`text-white font-xl ${showPTypeFilter ? '-rotate-90' : 'rotate-90'} h-8 w-8 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300`}>
              <GrNext />
            </button>
          </div>

          <form className={`mt-2 ${showPTypeFilter ? 'hidden' : 'block'}`}>

            <ul>

              <li className='flex items-center gap-4'>
                <input type="checkbox" name='hostel' id='hostel' />
                <label htmlFor="hostel" className='text-white font-thin'>Hostel</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='pg' id='pg' />
                <label htmlFor="pg" className='text-white font-thin'>PG</label>
              </li>

            </ul>

          </form>

        </div>

        {/* property city */}
        <div>

          <div className='mt-6 flex justify-between'>
            <h2 className='text-white font-semibold'>City</h2>
            <button onClick={toogleCityFilter} className={`text-white font-xl ${showCityFilter ? '-rotate-90' : 'rotate-90'} h-8 w-8 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300`}>
              <GrNext />
            </button>
          </div>

          <form className={`mt-2 ${showCityFilter ? 'hidden' : 'block'}`}>

            <ul>

              <li className='flex items-center gap-4'>
                <input type="checkbox" name='satara' id='satara' />
                <label htmlFor="satara" className='text-white font-thin'>Satara</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='wai' id='wai' />
                <label htmlFor="wai" className='text-white font-thin'>Wai</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='pimpari' id='pimpari' />
                <label htmlFor="pimpari" className='text-white font-thin'>Pimpari-Chinchvad</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='pune' id='pune' />
                <label htmlFor="pune" className='text-white font-thin'>Pune</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='kolhapur' id='kolhapur' />
                <label htmlFor="kolhapur" className='text-white font-thin'>Kolhapur</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='karad' id='karad' />
                <label htmlFor="karad" className='text-white font-thin'>Karad</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='patan' id='patan' />
                <label htmlFor="patan" className='text-white font-thin'>Patan</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='mumbai' id='mumbai' />
                <label htmlFor="mumbai" className='text-white font-thin'>Mumbai</label>
              </li>

            </ul>

          </form>

        </div>

        {/* price */}
        <div>

          <div className='mt-6 flex justify-between'>
            <h2 className='text-white font-semibold'>Price</h2>
            <button onClick={tooglePriceFilter} className={`text-white font-xl ${showPriceFilter ? '-rotate-90' : 'rotate-90'} h-8 w-8 flex justify-center items-center rounded-full hover:bg-zinc-600 transition-all duration-300`}>
              <GrNext />
            </button>
          </div>

          <form className={`mt-2 transition-all duration-500 ${showPriceFilter ? 'hidden' : 'block'}`}>

            <ul>

              <li className='flex items-center gap-4'>
                <input type="checkbox" name='low_high' id='low_high' />
                <label htmlFor="low_high" className='text-white font-thin'>Low-High</label>
              </li>
              <li className='flex items-center gap-4'>
                <input type="checkbox" name='high_low' id='high_low' />
                <label htmlFor="high_low" className='text-white font-thin'>High-Low</label>
              </li>

            </ul>

          </form>

        </div>

        {/* button */}
        <button className='w-full h-10 mt-10 bg-white hover:bg-zinc-200 rounded-lg uppercase font-semibold transition-all duration-300'>
          Apply Filter
        </button>


      </section>

      {/* mobile nav */}
      <nav className='pt-28 px-4 mb-6 flex justify-between items-center md:hidden'>
        {/* property nav */}
        <div>
          <button onClick={toogleFilter} className='text-4xl text-white font-semibold'>
            <BsFilterLeft />
          </button>
        </div>

        <div className='relative'>
          <input type="text" className='w-44 md:w-72 h-10 px-3 text-white border border-gray-600 rounded-lg bg-transparent transition-all duration-500 outline-none hover:ring-2 hover:ring-zinc-600' placeholder='Search' />

          {/* search icon */}
          <div className='h-10 w-10 bg-black rounded-r-lg text-lg md:text-2xl text-white absolute top-0 right-0 flex justify-center items-center border-r border-t border-b border-gray-600'>
            <IoSearchOutline />
          </div>

        </div>


      </nav>

      {/* main section */}
      <section className='md:ml-64 md:py-28 px-2 flex flex-wrap gap-4 justify-around '>

        {/* property card */}
        <div className='min-h-[22rem] min-w-64 bg-zinc-800 rounded-3xl overflow-hidden relative'>

          {/* like btn */}
          <div className='text-xl text-white cursor-pointer absolute z-10 top-4 right-4'>
            <FaRegHeart />
          </div>

          {/* property img */}
          <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

          {/* property info */}
          <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-10 py-2 px-4 flex flex-col justify-around'>

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
          <div className='text-xl text-white cursor-pointer absolute z-10 top-4 right-4'>
            <FaRegHeart />
          </div>

          {/* property img */}
          <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

          {/* property info */}
          <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-10 py-2 px-4 flex flex-col justify-around'>

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
          <div className='text-xl text-white cursor-pointer absolute z-10 top-4 right-4'>
            <FaRegHeart />
          </div>

          {/* property img */}
          <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

          {/* property info */}
          <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-10 py-2 px-4 flex flex-col justify-around'>

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
          <div className='text-xl text-white cursor-pointer absolute z-10 top-4 right-4'>
            <FaRegHeart />
          </div>

          {/* property img */}
          <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

          {/* property info */}
          <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-10 py-2 px-4 flex flex-col justify-around'>

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
          <div className='text-xl text-white cursor-pointer absolute z-10 top-4 right-4'>
            <FaRegHeart />
          </div>

          {/* property img */}
          <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

          {/* property info */}
          <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-10 py-2 px-4 flex flex-col justify-around'>

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
          <div className='text-xl text-white cursor-pointer absolute z-10 top-4 right-4'>
            <FaRegHeart />
          </div>

          {/* property img */}
          <img src={HomeImg} alt="homeImg" className='h-[12rem] w-64 zoomImg cursor-pointer' />

          {/* property info */}
          <div className='h-[11rem] w-64 rounded-tr-3xl rounded-tl-3xl bg-white absolute bottom-0 z-10 py-2 px-4 flex flex-col justify-around'>

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

      </section>

    </div>
  )
}

export default Rooms