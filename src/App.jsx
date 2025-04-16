import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Enhance from './components/Enhance'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar />
      <Hero />
      <Enhance />
    </div>
  )
}

export default App