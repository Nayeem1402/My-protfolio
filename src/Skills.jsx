import React from 'react'
import css from './../public/img/icons8-css-240.png';
import html from './../public/img/icons8-html-240.png';
import javascript from './../public/img/icons8-javascript-240.png';
import github from './../public/img/icons8-github-96.png';
import react from './../public/img/icons8-react-96.png';
import tailwind from './../public/img/icons8-tailwind-css-96.png';
import { useState, useEffect } from 'react';
const Skills = () => {
    const [htmlProgress, setHtmlProgress] = useState(0);
    const [cssProgress, setCssProgress] = useState(0);
    const [jsProgress, setJsProgress] = useState(0);
    const [reactProgress, setReactProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHtmlProgress((prev) => (prev < 98 ? prev + 1 : 98));
            setCssProgress((prev) => (prev < 95 ? prev + 1 : 95));
            setJsProgress((prev) => (prev < 70 ? prev + 1 : 70));
            setReactProgress((prev) => (prev < 90 ? prev + 1 : 90));
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-neutral-700'>My Skills</h2>

            <p className='capitalize font-semibold text-center text-neutral-500 mt-8'>Here are some of the skills I have acquired:</p>



            {/* skills container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5 justify-items-center w-full'>

                <div className=' animate__animated animate__fadeInUp  border-2 border-neutral-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={html} alt="HTML" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>HTML</h3>
                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>Expert</p>

                    <div className='flex justify-center items-center mt-4'>
                        <progress className="progress progress-primary w-56" value={htmlProgress} max="100"></progress>
                    </div>

                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>{htmlProgress}%</p>
                </div>

                {/* css  */}

                <div className='animate__animated animate__fadeInUp  border-2 border-neutral-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={css} alt="CSS" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>CSS</h3>
                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>Expert</p>

                    <div className='flex justify-center items-center mt-4'>
                        <progress className="progress progress-primary w-56" value={cssProgress} max="100"></progress>
                    </div>

                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>{cssProgress}%</p>
                </div>

                {/* js  */}

                  <div className='animate__animated animate__fadeInUp  border-2 border-neutral-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={javascript} alt="JavaScript" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>JavaScript</h3>
                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>Intermediate</p>

                    <div className='flex justify-center items-center mt-4'>
                        <progress className="progress progress-primary w-56" value={jsProgress} max="100"></progress>
                    </div>

                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>{jsProgress}%</p>
                </div>


                {/* React  */}
                <div className='animate__animated animate__fadeInUp  border-2 border-neutral-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={react} alt="React" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>React</h3>
                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>Expert</p>

                    <div className='flex justify-center items-center mt-4'>
                        <progress className="progress progress-primary w-56 " value={reactProgress} max="100"></progress>
                    </div>

                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>{htmlProgress}%</p>
                </div>


                {/* Tailwind CSS */}
                <div className='animate__animated animate__fadeInUp  border-2 border-neutral-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={tailwind} alt="Tailwind CSS" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>Tailwind CSS</h3>
                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>Expert</p>

                    <div className='flex justify-center items-center mt-4'>
                        <progress className="progress progress-primary w-56" value={htmlProgress} max="100"></progress>
                    </div>

                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>{htmlProgress}%</p>
                </div>

                {/* GitHub */}

                <div className='animate__animated animate__fadeInUp  border-2 border-neutral-300 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <img src={github} alt="GitHub" className='w-24 h-24 mx-auto' />
                    <h3 className='text-center text-2xl font-semibold'>GitHub</h3>
                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>Expert</p>

                    <div className='flex justify-center items-center mt-4'>
                        <progress className="progress progress-primary w-56" value={cssProgress} max="100"></progress>
                    </div>

                    <p className='text-center text-neutral-500 text-xl animate__animated animate__fadeInUp animate__delay-1s'>{cssProgress}%</p>
                </div>




            </div>
        </div>
    );
};

export default Skills
4