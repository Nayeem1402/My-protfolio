import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='capitalize text-5xl text-wrap leading-tight  text-[#272341] font-bold  flex items-center justify-center h-screen flex-wrap ml-8  lg:justify-start lg:text-7xl lg:pl-36'>
                <h1 className=' '>Hi, i am  <span className=' bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>MD.Nayeem </span><br />a  frontend developer <br />
                
                {/* this is button area */}

                 <button className='capitalize w-40 text-2xl font-normal text-[#01C8AD] border-[#3d9add] border-2 rounded-lg p-2 hover:bg-gradient-to-r from-cyan-400 to-blue-600 hover:text-white  hover:font-bold'>shwo more</button> </h1>
             </div>

           

        </>
    )
}

export default Banner