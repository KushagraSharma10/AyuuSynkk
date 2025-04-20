import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Enhance from './components/Enhance'
import Sync from './components/Sync'
import RealTime from './components/RealTime'
import Testimonial from './components/Testimonial'
import Marquee from './components/Marquee'
import Demo from './components/Demo'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar />
      <Hero />
      <Enhance />
      <Sync />
      <RealTime />
      <Testimonial />
      <Marquee />
      <Demo />
      <Footer/>
    </div>
  )
}

export default App