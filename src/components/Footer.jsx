import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-black py-10 px-4 text-white'>
        <div>
            <h1 className='text-[2.8em] font-medium' >Ayusynk</h1>
            <div className='links flex items-center gap-2 mt-2 '>
                <a className='p-3 border-1 rounded-full ' href=""><FaYoutube className='text-[1.3em]' /></a>
                <a className='p-3 border-1  rounded-full ' href=""><FaLinkedin className='text-[1.3em]' /></a>
                <a className='p-3 border-1  rounded-full ' href=""><FaFacebook className='text-[1.3em]' /></a>
                <a className='p-3 border-1  rounded-full ' href=""><FaInstagram className='text-[1.3em]' /></a>
                <a className='p-3 border-1  rounded-full ' href=""><FaTwitter  className='text-[1.3em]'/></a>
            </div>
            <div className='flex items-center justify-between gap-4 mt-13'>
                <a className='w-[45vw] ' href=""><img className='w-full' src="https://www.ayusynk.ai/wp-content/uploads/2024/11/google-play-ic.png" alt="" /></a>
                <a className='w-[45vw]' href=""><img className='w-full' src="https://www.ayusynk.ai/wp-content/uploads/2024/11/app-store-ic.png" alt="" /></a>
            </div>
        </div>
        <div className='All-links mt-10'>
            <div>
                <h1 className='text-[1.3em] font-bold'>Products</h1>
                <div className='sub-links flex flex-col mt-2 gap-3  '>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-[1.3em] font-bold'>Products</h1>
                <div className='sub-links flex flex-col mt-2 gap-3  '>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                    <a href="">AyuSynK 2 Base</a>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='text-[1.3em] font-bold'>Products</h1>
                <div className='sub-links flex flex-col mt-2 gap-3  '>
                    <a href="">Contact Sales</a>
                    <a className='underline' href="">080-471-91146</a>
                    <a href="">Support Sales</a>
                    <a className='underline' href="">080-471-98155</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer