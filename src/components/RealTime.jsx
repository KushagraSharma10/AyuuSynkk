import React from 'react'

const RealTime = () => {
  return (
    <div className='bg-[#EAEAEA] px-3 py-11 lg:px-[5vw]' >
        <div className='Text-Area lg:flex lg:items-center lg:gap-[15vw]'>
            <h1 className='text-[1.55em] lg:text-[2.4em] font-bold leading-8 lg:w-[30vw] lg:leading-13'>Real-Time monitoring for enhanced diagnostics.</h1>
            <p className='font-medium pt-2 leading-[6vw] lg:leading-[1.5vw] lg:w-[40vw] lg:text-[1.1em]'>The unified ayu dashboard ecosystem provides access to real-time monitoring data. The technology is designed to provide with dedicated filter for clarity, precision and accuracy. AyuSynk features one tap connectivity with smartphones using bluetooth technology, guided capturing of physiological signals and web streaming of vital signs.</p>
           
        </div>
        <hr className='text-[#BEBEBE] mt-5' />
        <div className='scrollable overflow-hidden  flex flex-col gap-3 section w-full h-[40vh]   py-2'>
            <div className='elem p-4 py-8 rounded-md bg-[#fff]' >
                <img className='w-[12vw]' src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png" alt="" />
                <h1 className='text-[2em] font-medium mt-4 text-[#606060]'>Advance technology</h1>
                <p className='font-medium mt-3'>Enabling IOT healthtech/medtech devices with the latest technology. Integrating 5G, bluetooth V5.3 for faster transfer of data even in remote areas</p>
            </div>
            <div className='elem p-4 rounded-md bg-[#fff]' >
                <img className='w-[12vw]' src="https://www.ayusynk.ai/wp-content/uploads/2024/07/grommet-icons_time.png" alt="" />
                <h1 className='text-[2em] font-medium mt-4 text-[#606060]'>Advance technology</h1>
                <p className='font-medium mt-3'>Enabling IOT healthtech/medtech devices with the latest technology. Integrating 5G, bluetooth V5.3 for faster transfer of data even in remote areas</p>
            </div>
        </div>
    </div>
  )
}

export default RealTime