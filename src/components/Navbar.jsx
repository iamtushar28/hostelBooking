import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {

    const [shoMobileNav, setMobileNav] = useState(true);
    const wrapperRef = useRef(null);

    const toggleMobileNav = () => {
        setMobileNav(!shoMobileNav);
    };


    return (
        <>
            {/* navbar */}
            <nav className='text-white bg-zinc-950 border-b border-zinc-800 z-40 fixed top-0 right-0 left-0 w-full h-20 flex justify-around items-center'>

                <h2 className='text-xl font-semibold'>BOOKME.in</h2>

                <div className='md:flex gap-6 uppercase hidden'>

                    <NavLink
                        to='/'
                        className={({ isActive }) => `transition-all duration-300 cursor-pointer py-1
                        ${isActive ? 'border-b-2' : 'text-zinc-400 '}
                        `}>
                        Home
                    </NavLink>

                    <NavLink
                        to='/rooms'
                        className={({ isActive }) => `transition-all duration-300 cursor-pointer py-1
                        ${isActive ? 'border-b-2' : 'text-zinc-400 '}
                        `}>
                        Rooms
                    </NavLink>

                    <NavLink className='text-zinc-400 hover:text-zinc-300 transition-all duration-300 cursor-pointer py-1'>Contact</NavLink>

                    <NavLink
                        to='/details'
                        className={({ isActive }) => `transition-all duration-300 cursor-pointer py-1
                        ${isActive ? 'border-b-2' : 'text-zinc-400 '}
                        `}>
                        Details
                    </NavLink>
                </div>

                <NavLink
                    to='/signin'
                    className='uppercase px-4 py-1 hidden md:block border border-zinc-400 hover:border-zinc-300 text-white rounded-2xl transition-all duration-300 cursor-pointer'>
                    Sign In
                </NavLink>

                {/* menu icon for mobile screen */}
                {/* Conditional rendering for Menu and Cross Icons with fade effect */}
                <button onClick={toggleMobileNav} className='text-xl md:hidden block transition-opacity duration-300'>
                    {!shoMobileNav ? (
                        <RxCross1 className="transition-opacity duration-300 opacity-100" />

                    ) : (
                        <AiOutlineMenu className="transition-opacity duration-300 opacity-100" />
                    )}
                </button>


            </nav>

            {/* mobile Navbar */}

            <section ref={wrapperRef} className={`z-40 md:hidden block fixed top-0 transition-all duration-500 w-[85%] h-screen mt-20 bg-zinc-950 py-6 ${shoMobileNav ? '-ml-[100%]' : ' '}`}>

                <div className='flex flex-col justify-center items-center gap-6 uppercase'>

                    <NavLink
                        to='/'
                        className={({ isActive }) => `transition-all duration-300 cursor-pointer py-1
                        ${isActive ? 'border-b-2 text-white' : 'text-zinc-400'}
                        `}>
                        Home
                    </NavLink>

                    <NavLink
                        to='/rooms'
                        className={({ isActive }) => `transition-all duration-300 cursor-pointer py-1
                        ${isActive ? 'border-b-2 text-white' : 'text-zinc-400'}
                        `}>
                        Rooms
                    </NavLink>

                    <NavLink className='text-zinc-400 hover:text-zinc-300 transition-all duration-300 cursor-pointer py-1'>Contact</NavLink>

                    <NavLink
                        to='/details'
                        className={({ isActive }) => `transition-all duration-300 cursor-pointer py-1
                      ${isActive ? 'border-b-2 text-white' : 'text-zinc-400'}
                      `}>
                        Details
                    </NavLink>

                </div>

                <div className='flex justify-center items-center mt-6'>
                    <NavLink
                        to='/signin'
                        className='uppercase px-4 py-1 border border-zinc-400 hover:border-zinc-300 text-white rounded-2xl transition-all duration-300 cursor-pointer'>
                        Sign In
                    </NavLink>

                </div>

            </section>

        </>
    )
}

export default Navbar;