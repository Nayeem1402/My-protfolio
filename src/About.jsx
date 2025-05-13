import Pimg from './../public/img/profile.jpg';

const About = () => {

    return (
        <div class="relative bg-gradient-to-r from-cyan-400 to-blue-600 text-white pb-20 pt-10 clip-polygon ">
         
         <h2 class="text-5xl font-bold text-center   mb-10  animate__animated animate__fadeIn   animate__slow animate__duration-[2s]">About Me</h2>

            {/* abour container  */}
           <section className='grid  gap-10 lg:grid-cols-2 lg:px-[10%] '>
           
            <div className='place-items-center animate__animated animate__fadeInUp  animate__delay-[800ms]'> <img className='max-w-[300px] max-h-[300px] rounded-2xl justify-end ' src={Pimg} alt="" /></div>


            <section className='flex justify-start'>
                <div class="relative max-w-4xl mx-auto text-center z-10  animate__animated animate__fadeInRight animate__delay-1s animate__duration-1s  ">



                    
                    <p class="text-lg mb-6">
                        Hi there, I'm MD.Nayeem, Frontend Developer<br />
                        I have a passion for creating beautiful and functional web applications. With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver seamless user experiences that leave a lasting impression. My goal is to combine my technical skills with creativity to bring ideas to life on the web.
                       
                    </p>

                    
                    <button class="border mb-24 border-white px-6 py-2 rounded relative overflow-hidden group">
                        <span class="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                         <a  class="relative text-white group-hover:text-blue-600 transition-colors duration-300 ease-in-out" href="https://docs.google.com/document/d/1SUqVBL5fQ4BusWuFMrcJPz3vlj11Vbng/edit?usp=sharing&ouid=107805970476868535798&rtpof=true&sd=true" target='blank'>Vew resume </a>
                    </button>         
                </div>
            </section>
           </section>
        </div>
    )
}

export default About
