import React from 'react'
import { NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import bgSVG from '../assets/shapes.svg'
import { IoArrowBack } from "react-icons/io5";


const Login = () => {
    return (
        <>
            <section className='flex justify-center items-center h-screen'>

                {/* back to home btn */}
                <NavLink
                to='/' 
                className='bg-black hover:bg-zinc-900 h-10 w-10 border border-zinc-600 text-white absolute md:top-20 md:left-96 top-8 left-8 cursor-pointer rounded-full z-10 transition-all duration-300 flex justify-center items-center text-xl'>
                    <IoArrowBack />
                </NavLink>

                <img src={bgSVG} alt="svg" className='relative hidden md:block' />


                <form action="" className='flex flex-col gap-8 items-center absolute'>

                    <h2 className='text-4xl font-semibold bg-gradient-to-r from-white to-zinc-400 inline-block text-transparent bg-clip-text py-2'>Sign In</h2>

                    <div className='flex flex-col gap-4'>

                        {/* countinue with google */}
                        <div>
                            <button className='w-72 h-10 px-2 text-white border bg-black border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded-lg flex items-center justify-center gap-2'>
                                <FcGoogle size={'22px'} />
                                Countinue With Google
                            </button>
                        </div>

                        {/* countinue with Facebook */}
                        <div>
                            <button className='w-72 h-10 px-2  bg-black text-white border border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded-lg flex items-center justify-center gap-2'>
                                <span className='text-blue-600'>
                                    <FaFacebook size={'22px'} />
                                </span>
                                Countinue With Facebook
                            </button>
                        </div>

                        <p className='text-lg text-zinc-400 text-center'>Or</p>

                        {/* email */}
                        <div>
                            <input type="email" className='w-72 h-10 px-2 bg-black text-white border border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded-lg' placeholder='Email' />
                        </div>

                        {/* password */}
                        <div>
                            <input type="password" className='w-72 h-10 px-2 bg-black text-white border border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded-lg' placeholder='Password' />
                        </div>

                        <button className='w-72 h-10 bg-white hover:bg-zinc-200 rounded-lg uppercase font-semibold transition-all duration-300'>
                            Sign In
                        </button>

                        <p className='text-white text-sm'>Don't have an account?
                            <NavLink
                                to='/signup'
                                className='font-semibold cursor-pointer hover:underline'>Create an account.
                            </NavLink>
                        </p>

                    </div>
                </form>



            </section>
        </>
    )
}

export default Login