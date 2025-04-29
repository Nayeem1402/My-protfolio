import React from 'react'
import profile from './profile.jpg';

const About = () => {
    return (
        <div class="relative bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-24 clip-polygon grid place-items-center gap-10 lg:grid-cols-2 lg:px-[10%] ">


                <img className='w-60 h-52 justify-end ' src={profile} alt="" srcset="./" />
                <section className='flex justify-start'>
                    <div class="relative max-w-4xl mx-auto text-center z-10">

                        <h2 class="text-4xl font-bold mb-4">About Me</h2>
                        <p class="text-lg mb-6">
                            Hi there, I'm Marcin Dabek, Frontend Developer student at Hyper Island... <br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut non dolorem accusantium, nihil natus architecto optio reiciendis odio voluptatem rem maiores, obcaecati nostrum voluptas cumque eos aperiam officiis dicta, dignissimos vero reprehenderit libero aut. Totam consequatur consectetur ad aliquid exercitationem voluptate eaque reiciendis consequuntur molestiae, possimus dolore laudantium praesentium eveniet?
                        </p>
                        <button class="border mb-24  border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition">
                            View Resume
                        </button>
                    </div></section>
         


        </div>
    )
}

export default About
