import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonial from './Components/testimonial'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
         <Hero/>
         <Feature/>
         <Workflow/>
         <Pricing/>
         <Testimonial/>
         <Footer/>
      </div>
    </>
  )
}

export default App