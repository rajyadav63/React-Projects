import React from 'react'

function Navbar() {
    return (
        <div className='border-2 h-[80px] w-full flex justify-around items-center'>
            <div>
                <img src="/logo.png" alt="logo" />
            </div>
            <div>
                <ul className='sm:flex justify-center items-center sm:gap-5 gap-3 mt-4 mb-3'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
