import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='capitalize text-5xl text-wrap leading-tight  text-[#272341] font-bold  flex items-center justify-center h-screen flex-wrap ml-8  lg:justify-start lg:text-7xl lg:pl-36'>
                <h1 className=' '>Hi, i am  <span className='text-[#01C8AD]'>MD.Nayeem </span><br />a  frontend developer <br />
                
                {/* this is button area */}

                 <button className='capitalize text-2xl font-normal text-[#01C8AD] border-[#01C8AD] border-2 rounded-lg p-2 hover:bg-[#01C8AD] hover:text-white  hover:font-bold'>shwo more</button> </h1>
             </div>

           

        </>
    )
}

export default Banner