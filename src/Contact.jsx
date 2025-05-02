import React from 'react'

const Contact = () => {
    return (
        <div className="relative bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-center px-4 py-20 "
            style={{
                clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
            }}>

            <h2 className="text-3xl font-bold mt-20 mb-4">CONTACT</h2>
            <p className="text-lg mb-6">
                If you want to talk projects, internship, or have questions just click below
            </p>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTDqXJsZMZfBwTtnqZkDnnGtCzxKkVRwxnzKwNDvNdWBTDhqVKxdBKFqNdpXQLmfrSQB" target='blank'
                className="inline-block border-2 border-white px-6 py-2 font-semibold relative overflow-hidden group"
            >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative text-white group-hover:text-teal-500 transition-colors duration-300">
                    Click to email me
                </span>
            </a>
        </div>
    )
}

export default Contact
