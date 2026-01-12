import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import code from "../assets/code.jpg"
import { checklistItems } from '../constants'

const Workflow = () => {
  return (
    <>
      <div className='mt-20 ' id='Workflow'>
           <h2 className='text-3xl sm:text-5xl lg:text-5xl mt-6 lg:mt-20 tracking-wide text-center'>Accelerate Your <span className='bg-[linear-gradient(to_right,#f97316,#c2410c)] text-transparent bg-clip-text'>Codeing Workflow</span></h2>
           <div className="flex flex-wrap justify-center ">
            <div className="p-2 w-full lg:w-1/2">
               <img src={code} alt="code-image"  />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {
                  checklistItems.map((items,index)=>{
                    return(
                      <div key={index} className='flex mb-12 '>
                         <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full ">
                            <CheckCircle2/>
                         </div>
                         <div>
                          <h5 className='mt-1 mb-2 text-xl'>{items.title}</h5>
                          <p className='text-md text-neutral-500'>{items.description}</p>
                         </div>
                      </div>
                    )
                  })
                }
            </div>
           </div>
      </div>
    </>
  )
}

export default Workflow