import React from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Sync = () => {

    // useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger)

    //   // Simple animation with class selectors
    //   gsap.to(".gsap-cards", {
    //     x: () => -(document.querySelector('.gsap-cards').scrollWidth + window.innerWidth),
    //     scrollTrigger: {
    //       trigger: ".gsap-section",
    //       start: "top top",
    //       end: () => "+=" + document.querySelector('.gsap-cards').scrollWidth,
    //       scrub: 1,
    //       pin: true,
    //       invalidateOnRefresh: true // Responsive ke liye important
    //     }
    //   })

    //   // Cleanup
    //   return () => {
    //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    //   }
    // }, [])

  return (
    <div className='gsap-section w-full px-4 lg:px-[5vw] py-10 lg:py-15 bg-black overflow-x-hidden'>
      <h1 className='lg:text-[3.1em] lg:font-semibold lg:w-[60vw] lg:mx-auto  lg:text-center text-center text-[1.9em] text-[#DEDEDE] font-medium'>
        Sync digital technology for a superior healthcare experience
      </h1>

      <div className='gsap-cards flex items-center gap-10 lg:gap-15 lg:px-14  mt-10 lg:w-[100vw]  w-[500vw]'>
        <div className='card w-[93vw] h-[90vw] border border-white flex items-center flex-shrink-0 justify-center  rounded-[3vw] border-none bg-[#1263CD] lg:w-[28vw] lg:h-[35vw] lg:rounded-[1vw]'>
          <img className='w-[60vw] h-[80vw] lg:rounded-[0vw] lg:w-[37vw] lg:h-full object-cover' src="https://www.ayusynk.ai/wp-content/uploads/2024/08/st-a2.png" alt="" />

        </div>
        <div className='card w-[93vw] h-[90vw] border border-white flex items-center justify-center flex-shrink-0 rounded-[3vw] border-none bg-[#1263CD] lg:w-[28vw] lg:h-[35vw] lg:rounded-[1vw]'>
          <img className='w-[60vw] h-[80vw] lg:rounded-[0vw] lg:w-[37vw] lg:h-full object-cover' src="https://www.ayusynk.ai/wp-content/uploads/2024/08/st-a2.png" alt="" />
          
        </div>
        <div className='card w-[93vw] h-[90vw] border border-white flex items-center justify-center flex-shrink-0 rounded-[3vw] border-none bg-[#1263CD] lg:w-[28vw] lg:h-[35vw] lg:rounded-[1vw]'>
          <img className='w-[60vw] h-[80vw] lg:rounded-[0vw] lg:w-[37vw] lg:h-full object-cover' src="https://www.ayusynk.ai/wp-content/uploads/2024/08/st-a2.png" alt="" />
        </div>
        <div className='card w-[93vw] h-[90vw] border border-white flex items-center justify-center flex-shrink-0 rounded-[3vw] border-none bg-[#1263CD] lg:w-[28vw] lg:h-[35vw] lg:rounded-[1vw]'>
          <img className='w-[60vw] h-[80vw] lg:rounded-[0vw] lg:w-[37vw] lg:h-full object-cover' src="https://www.ayusynk.ai/wp-content/uploads/2024/08/st-a2.png" alt="" />
        </div>
        <div className='card w-[93vw] h-[90vw] border border-white flex items-center justify-center flex-shrink-0   rounded-[3vw] border-none bg-[#1263CD] lg:w-[28vw] lg:h-[35vw] lg:rounded-[1vw]'>
          <img className='w-[60vw] h-[80vw] lg:rounded-[0vw] lg:w-[37vw] lg:h-full object-cover' src="https://www.ayusynk.ai/wp-content/uploads/2024/08/st-a2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sync
