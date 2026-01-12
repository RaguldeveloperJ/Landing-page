import React from 'react'
import Video1 from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'

const Hero = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-6 lg:mt-20 '>
                <h1 className='text-4xl sm:text-6xl lg:text-7xl  text-center tracking-wide px-12 mt-0'>VirtualR build tools <span className='bg-[linear-gradient(to_right,#f97316,#991b1b)] text-transparent bg-clip-text'> for  developers</span>
                </h1>
                <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl '>
                    Empower your creativity and bring your VR app ideas to life with our intuitive development tool . Get started today and turn your imagination into immersive reality!
                </p>
                <div className='flex justify-center my-10 '>
                    <a href="#" className='bg-[linear-gradient(to_right,#f97316,#c2410c)] py-3 px-4 mx-3 rounded-md '> Start for free</a>
                    <a href="#" className='py-3 px-4 rounded-md border '>Documentation</a>
                </div>
                <div className='flex  mt-10 justify-center'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
                    >
                        <source src={Video1} type="video/mp4" />
                    </video>

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
                    >
                        <source src={Video2} type="video/mp4" />
                    </video>

                </div>
            </div>
        </>
    )
}

export default Hero