import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Enhance from './components/Enhance'
import Sync from './components/Sync'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar />
      <Hero />
      <Enhance />
      <Sync />

    </div>
  )
}

export default App