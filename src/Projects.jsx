import React from 'react'

const Projects = () => {
    return (
        <section className='mt-20 '>
            <h1 className='text-5xl font-bold text-center   mb-10  animate__animated animate__fadeIn   animate__slow animate__duration-[2s]'>MY PROJECTS</h1>

            {/* projects container  */}



            {/* Project 1: Phone Hunting Web App */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5"></div>
            <section>
                {/* project 1  */}
                <div>
                    <h2>Phone Hunting Web App</h2>
                    <p>Live Link: <a href="https://nayeem1402.github.io/Phone-Hunting/" target='blank' >Phone Hunting</a> </p>
                    <p>Developed a dynamic and responsive phone search application using HTML, CSS, and JavaScript. The project fetches real-time data from an external API to display a list of smartphones based on user search input. Key features include search functionality, dynamic loading of search results, detailed phone specifications view, and graceful error handling. Focused on clean UI/UX, responsive design, and efficient DOM manipulation to enhance user experience. </p>
                </div>

                {/* project 2  */}

                <div>

                </div>
            </section>

        </section>
    )
}

export default Projects
