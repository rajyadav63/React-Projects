import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-around align-middle text-center mt-10 h-[100px]'>
            <div>
                <img src="/brand_logo.png" alt="logo" />
            </div>
            <div>
                <ul className='flex justify-center gap-5'>
                    <li> <a href="#"></a>MENU</li>
                    <li> <a href="#"></a>LOCATION</li>
                    <li> <a href="#"></a>ABOUT</li>
                    <li> <a href="#"></a>CONTACT</li>
                </ul>
            </div>
            <div className='bg-red-700 text-center text-white h-[25px] w-[90px] rounded'>
                <button className='text-center'>Login</button>
            </div>
        </div>
    )
}

export default Navbar
