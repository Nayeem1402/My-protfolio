import React from 'react'
import css from './../public/img/icons8-css-240.png';
import html from './../public/img/icons8-html-240.png';
import javascript from './../public/img/icons8-javascript-240.png';
const Skills = () => (
    <div>
        <h2 className='text-4xl font-bold text-center text-neutral-700'>My Skills</h2>

        <p className='capitalize font-semibold text-center text-neutral-500 mt-8'>Here are some of the skills I have acquired:</p>

        {/* skills container */}
    
            <div className='flex flex-col gap-5  justify-center items-center mt-8 lg:flex-row'>
                <div className='w-1/4 '>
                    <img src={html} alt="HTML" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>HTML</h3>
                    <p className='text-center text-neutral-500 text-xl'>Expart </p>
                    <p className='text-center text-neutral-500 text-xl'>98%</p>
                </div>
                <div className='w-1/4 '>
                    <img src={css} alt="CSS" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>CSS</h3>
                    <p className='text-center text-neutral-500 text-xl'>Expart</p>
                    <p className='text-center text-neutral-500 text-xl'>95%</p>
                </div>
                <div className='w-1/4 '>
                    <img src={javascript} alt="JavaScript" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>JavaScript</h3>
                    <p className='text-center text-neutral-500 text-xl'>Intermadiet</p>
                    <p className='text-center text-neutral-500 text-xl'>70%</p>
                </div>
            </div>
       
    </div>
)

export default Skills
4