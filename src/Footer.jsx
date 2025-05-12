import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800  text-white py-4  ">
                <div className="container mx-auto gap-7 flex flex-col py-7 text-center">
                    <p className="text-l mt-4">© 2025 Nayeem. All rights reserved.</p>
                    <p className="text-l">Follow me on social media:</p>
                 
                    <div className="flex justify-center">
                        <hr className="border-gray-600 w-[70%]" />
                    </div> 
                    
                    <div className="flex justify-center space-x-4 mt-2">

                            {/* facebook  */}

                        <a href="https://web.facebook.com/M.N.01906/" target="blank" className="text-gray-400 hover:text-white">Facebook</a>

                        {/* LinkedIn  */}
                        <a href="https://www.linkedin.com/in/md-nayeem-62734934a/hover:text-white" target='blank'>LinkedIn</a>

                        {/* github  */}
                        
                        <a href="https://github.com/Nayeem1402" target="blank" className="text-gray-400 hover:text-white">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
