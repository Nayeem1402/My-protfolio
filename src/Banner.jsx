import React from 'react'
import 'animate.css';
const Banner = () => {
    return (
        <div>
            <div className=' Banner-main animate__animated animate__fadeInLeft  capitalize text-5xl text-wrap leading-tight  text-[#272341] font-bold  flex items-center justi fy-center h-screen flex-wrap ml-8  lg:justify-start lg:te xt-7xl lg:pl-36'>
                <h1 className=' '>Hi, i am  <span className=' bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 '>MD.Nayeem </span><br />a  frontend developer <br />



                    <button className='capitalize animate__animated animate__fadeInLeft animate__delay-1s w-40 text-2xl font-normal text-[#2d64b6] border-[#3d9add] border-2 rounded-lg p-2 relative overflow-hidden group'>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        <span className="relative z-10 text-[#2d64b6] group-hover:text-white transition-colors duration-300">
                            Show More
                        </span>
                    </button>

                </h1>

            </div>



        </div>
    )
}

export default Banner