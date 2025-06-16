import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-around align-middle text-center mt-5'>
            <div>
                <img src="/logo.png" alt="logo" />
            </div>
            <div>
                <ul className='sm:flex justify-center align-middle gap-6 mt-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
