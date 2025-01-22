import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import bgSVG from '../assets/shapes.svg'


const ContactUs = () => {
    return (
        <>

            <section id='ContactUs' className='w-full h-auto px-8 py-8 flex gap-6 md:gap-0 flex-wrap justify-around items-center bg-SVG'>
                
            {/* <img src={bgSVG} alt="svg" className='hidden md:block' /> */}


                {/* adress and contact detail */}
                <div className='w-full md:w-[50%]'>

                    <h2 className='text-2xl md:text-4xl text-white font-semibold mb-2'>Get in touch with Us</h2>
                    <p className='text-white text-sm md:text-base md:w-[80%]'>Have a question or need assistance with your booking? We're here to help! Whether you're looking for more info about our hostel, need help with a reservation, or have special requests, feel free to reach out. Drop us a message, and we'll get back to you soon!</p>

                    <div className='flex gap-8 md:gap-14 mt-2 mb-2'>

                        {/* location */}
                        <div className='mt-4 flex flex-col items-center'>

                            <div className="h-10 w-10 border border-zinc-600 hover:border-purple-600 rotate-45 text-white flex justify-center items-center transition-all duration-300 cursor-pointer">
                                <div className="text-lg -rotate-45">
                                    <FaLocationDot />
                                </div>
                            </div>
                            <p className='text-zinc-300 text-xs md:text-sm mt-3'>Satara, MH.</p>
                        </div>

                        {/* phone */}
                        <div className='mt-4 flex flex-col items-center'>
                            <div className='h-10 w-10 border border-zinc-600 hover:border-pink-600 rotate-45 text-white flex justify-center items-center transition-all duration-300 cursor-pointer'>
                                <div className='-rotate-45 text-lg'>
                                    <FaHeadphones />
                                </div>
                            </div>
                            <p className='text-zinc-300 text-xs md:text-sm mt-3'>+91 7559354877</p>
                        </div>

                        {/* email */}
                        <div className='mt-4 flex flex-col items-center'>
                            <div className='h-10 w-10 border border-zinc-600 hover:border-blue-600 rotate-45 text-white flex justify-center items-center transition-all duration-300 cursor-pointer'>
                                <div className='-rotate-45 text-lg'>
                                    <FiMail />
                                </div>
                            </div>
                            <p className='text-zinc-300 text-xs md:text-sm mt-3'>iamtushar2830</p>
                        </div>

                    </div>

                    <form action="#" className='mt-6'>

                        <div className='flex flex-wrap gap-2 md:gap-[6%] mb-6'>

                            <input type="text" className='w-full md:w-[40%] h-10 px-2 bg-black text-white border border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='Name' />

                            <input type="email" className='w-full md:w-[40%] h-10 px-2 bg-black text-white border border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='Email' />

                        </div>

                        <div>

                            <textarea name="message" id="message" className='w-full md:w-[86%] h-44 p-2 bg-black text-white border border-zinc-600 outline-none hover:ring-2 hover:ring-zinc-500 transition-all duration-300 rounded' placeholder='Message'></textarea>

                        </div>

                        <div className='flex justify-center items-center md:mr-24 mt-4'>
                            <button className='h-12 px-10 py-2 rounded bg-white hover:bg-zinc-200 text-black font-semibold transition-all duration-300 uppercase'>Send</button>
                        </div>

                    </form>

                </div>

                {/* google map */}
                <div className='w-[17rem] h-[17rem] md:w-[28rem] md:h-[28rem] border border-zinc-600 rounded-full overflow-hidden'>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8571669418193!2d73.98317777413276!3d17.75136799221977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2387c55555555%3A0x271ed8e1f7937e6!2sArvind%20Gavali%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1727499313775!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-[17rem] h-[17rem] md:w-[28rem] md:h-[28rem] rounded-full zoomImg'></iframe>

                </div>

            </section>

        </>
    )
}

export default ContactUs