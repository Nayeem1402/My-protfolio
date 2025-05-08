import React from 'react'
import Phone from './../public/Projects/Screenshot 2025-05-08 044112.png';
const Projects = () => {
    return (
        <section className='mt-20 '>
            <h1 className='text-5xl font-bold text-center mb-10  animate__animated animate__fadeInUp  '>MY PROJECTS</h1>

            {/* projects container  */}


            <section>
                {/* project 1  */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-5'>
                    <div className='col-span-1 animate__animated animate__slideInLeft'>
                        <h2 className='font-bold text-3xl'>Phone Hunting Web App</h2>
                        <p className='font-semibold text-xl my-3'>Live Link: <a className='text-blue-500' href="https://nayeem1402.github.io/Phone-Hunting/" target='blank' >Phone Hunting</a> </p>
                        <p className='text-lg'>Developed a dynamic and responsive phone search application using HTML, CSS, and JavaScript. The project fetches real-time data from an external API to display a list of smartphones based on user search input. Key features include search functionality, dynamic loading of search results, detailed phone specifications view, and graceful error handling. Focused on clean UI/UX, responsive design, and efficient DOM manipulation to enhance user experience. </p>
                    </div>
                   

                    <div class=" col-span-2">
                        <div class="overflow-hidden rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
                             <img
                        className=' border-8 border-blue-500 rounded-2xl animate__animated animate__backInRight hover:transform hover:rotate-3 hover:'
                        src={Phone}
                        alt=""
                    />
                        </div>
                    </div>


                </div>

                {/* project 2  */}

                <div>

                </div>
            </section>

        </section>
    )
}

export default Projects
