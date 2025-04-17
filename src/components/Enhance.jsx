import React from 'react'

const Enhance = () => {
    return (
        <div className='w-full px-4 py-10 lg:px-[15vw] lg:py-[5.5vw] bg-[#EEEEEE]'>
            
            <h1 className='text-[1.55em] lg:text-[2.4em] font-semibold text-center'>Enhancing precision and accuracy in healthcare by syncing digital technology for a better healthcare</h1>

            <p className='text-[1em] text-center pt-2 leading-[6vw] lg:leading-[2.3vw] lg:text-[1.3em] lg:pt-4'>We strive to improve health and extend lives by blending technology with medicine for accurate diagnosis and monitoring. Our mission is to offer innovative healthcare products and exceptional service to enhance healthcare outcomes.</p>

            <div className='numbers pt-10 flex items-center justify-center gap-10 lg:gap-20 lg:pt-15 flex-wrap '>
                <div className='sold '>
                    <h1 className='text-[2.4em] lg:text-[3.2em] font-bold text-[#383838]'>10000+</h1>
                    <p className='text-center'>Devices Sold</p>
                </div>
                <div className='sold '>
                    <h1 className='text-[2.4em] lg:text-[3.2em] font-bold text-[#383838]'>67822+</h1>
                    <p className='text-center'>Patients screened</p>
                </div>
                <div className='sold'>
                    <h1 className='text-[2.4em] lg:text-[3.2em] font-bold text-[#383838]'>300000+</h1>
                    <p className='text-center'>No. of recordings</p>
                </div>
            </div>
        </div>
    )
}

export default Enhance