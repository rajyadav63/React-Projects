import React from 'react'

const Hero = () => {
    return (
        <div className='ml-[100px] flex justify-centre align-middle'>
            <div className='w-[45%] m-9'>
                <h1 className='w-[610px] text-8xl font-bold ml-9'>YOUR FEET DESERVE THE BEST</h1>
                <p className='w-[450px] mt-6 ml-10'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='ml-9 mt-4'>
                    <button className='bg-red-600 text-white px-5 py-2 rounded-lg mr-4'>Shop Now</button>
                    <button className='border-2 px-5 py-2 rounded-lg mr-4'>Category</button>
                </div>
                <div className='mt-4 ml-9'>
                    <p>Also Availabe On</p>
                    <div className='flex gap-4'>
                        <img src="/flipkart.png"/>
                        <img src="/amazon.png" />
                    </div>
                </div>
            </div>
            <div className='w-[45%] ml-4'>
                <img src="/shoe_image.png" alt="shoe" />
            </div>
        </div>
    )
}

export default Hero