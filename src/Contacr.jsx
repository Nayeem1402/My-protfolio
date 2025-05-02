import React from 'react'

const Contacr = () => {
    return (
        <div className="relative bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-center px-4 py-20 "
            style={{
                clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
            }}>


            <h2 className="text-3xl font-bold mt-20  mb-4">CONTACT</h2>
            <p className="text-lg mb-6">
                If you want to talk projects, internship, or have questions just click below
            </p>
            <a href="mnmdnayeem@gmail.com"
                className="inline-block border-2 border-white px-6 py-2 font-semibold hover:bg-white hover:text-teal-500 transition"
            >
                Click to email me
            </a>
        </div>
    )
}

export default Contacr
