import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
    return (
        <>
            <div className='mt-20 tracking-wide' id='testimonial'>
                <h2 className='text-3xl sm:text-5xl lg:text-5xl my-10 lg:my-20 tracking-wide text-center'>What People Are Saying</h2>
                <div className="flex flex-wrap justify-center">
                    {
                        testimonials.map((items, index) => {
                            return (
                                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2 '>
                                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                                        <p>{items.text}</p>
                                        <div className="flex mt-8 items-start">
                                            <img src={items.image} alt={items.user} className='w-12 h-12 mr-6 rounded-full  border border-netural-300' />
                                            <div>
                                                <h6 className=''>{items.user}</h6>
                                                <span className='text-sm font-normal italic text-neutral-600 '>{items.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Testimonial