// import React from 'react'
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'

// const Footer = () => {
//   return (
//     <div className='bg-black py-10 px-4 text-white'>
//         <div>
//             <h1 className='text-[2.8em] font-medium' >Ayusynk</h1>
//             <div className='links flex items-center gap-2 mt-2 '>
//                 <a className='p-3 border-1 rounded-full ' href=""><FaYoutube className='text-[1.3em]' /></a>
//                 <a className='p-3 border-1  rounded-full ' href=""><FaLinkedin className='text-[1.3em]' /></a>
//                 <a className='p-3 border-1  rounded-full ' href=""><FaFacebook className='text-[1.3em]' /></a>
//                 <a className='p-3 border-1  rounded-full ' href=""><FaInstagram className='text-[1.3em]' /></a>
//                 <a className='p-3 border-1  rounded-full ' href=""><FaTwitter  className='text-[1.3em]'/></a>
//             </div>
//             <div className='flex items-center justify-between gap-4 mt-13'>
//                 <a className='w-[45vw] ' href=""><img className='w-full' src="https://www.ayusynk.ai/wp-content/uploads/2024/11/google-play-ic.png" alt="" /></a>
//                 <a className='w-[45vw]' href=""><img className='w-full' src="https://www.ayusynk.ai/wp-content/uploads/2024/11/app-store-ic.png" alt="" /></a>
//             </div>
//         </div>
//         <div className='All-links mt-10'>
//             <div>
//                 <h1 className='text-[1.3em] font-bold'>Products</h1>
//                 <div className='sub-links flex flex-col mt-2 gap-3  '>
//                     <a href="">AyuSynK 2 Base</a>
//                     <a href="">AyuSynK 2 Student</a>
//                     <a href="">AyuSynK 2+</a>
//                     <a href="">AyuSynK 2 Pro Lite</a>
//                     <a href="">AyuSynK 2 Pro Advance</a>
//                 </div>
//             </div>
//             <div className='mt-10'>
//                 <h1 className='text-[1.3em] font-bold'>Products</h1>
//                 <div className='sub-links flex flex-col mt-2 gap-3  '>
//                     <a href="">About us </a>
//                     <a href="">Contact Us</a>
//                     <a href="">Privacy Policy</a>
//                     <a href="">Shipping Policy </a>
//                     <a href="">Terms and Conditions</a>
//                     <a href="">Return And Refund Policy</a>
//                 </div>
//             </div>
//             <div className='mt-10'>
//                 <h1 className='text-[1.3em] font-bold'>Products</h1>
//                 <div className='sub-links flex flex-col mt-2 gap-3  '>
//                     <a href="">Contact Sales</a>
//                     <a className='underline' href="">080-471-91146</a>
//                     <a href="">Support Sales</a>
//                     <a className='underline' href="">080-471-98155</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6'

const socialIcons = [
  { icon: <FaYoutube className='text-[1.3em]' />, href: '' },
  { icon: <FaLinkedin className='text-[1.3em]' />, href: '' },
  { icon: <FaFacebook className='text-[1.3em]' />, href: '' },
  { icon: <FaInstagram className='text-[1.3em]' />, href: '' },
  { icon: <FaTwitter className='text-[1.3em]' />, href: '' },
]

const appStoreLinks = [
  {
    href: '',
    src: 'https://www.ayusynk.ai/wp-content/uploads/2024/11/google-play-ic.png',
  },
  {
    href: '',
    src: 'https://www.ayusynk.ai/wp-content/uploads/2024/11/app-store-ic.png',
  },
]

const footerSections = [
  {
    title: 'Products',
    links: [
      'AyuSynK 2 Base',
      'AyuSynK 2 Student',
      'AyuSynK 2+',
      'AyuSynK 2 Pro Lite',
      'AyuSynK 2 Pro Advance',
    ],
  },
  {
    title: 'Sitemap',
    links: [
      'About us',
      'Contact Us',
      'Privacy Policy',
      'Shipping Policy',
      'Terms and Conditions',
      'Return And Refund Policy',
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { text: 'Contact Sales', underline: false },
      { text: '080-471-91146', underline: true },
      { text: 'Support Sales', underline: false },
      { text: '080-471-98155', underline: true },
    ],
    isPhoneSection: true,
  },
]

const Footer = () => {
  return (
    <div className='bg-black py-10 lg: px-4 lg:px-[7vw] lg:mt[vw] text-white'>
       <div className='lg:flex lg:items-center justify-between '>
       <div className='lg:flex lg:flex-col lg:justify-between lg:gap-6 '>
        <h1 className='text-[2.8em] font-medium'>Ayusynk</h1>
        <div className='links flex items-center gap-2 mt-2'>
          {socialIcons.map(({ icon, href }, idx) => (
            <a key={idx} className='p-3 border-1 rounded-full' href={href}>
              {icon}
            </a>
          ))}
        </div>
        <div className='flex lg:flex-col lg:items-start items-center justify-between gap-4 mt-13'>
          {appStoreLinks.map(({ href, src }, idx) => (
            <a key={idx} className='w-[45vw] lg:w-[10vw]' href={href}>
              <img className='w-full' src={src} alt='' />
            </a>
          ))}
        </div>
      </div>

      <div className='All-links mt-10 lg:mt-0 lg:flex lg:items-start lg:justify-between lg:gap-30 lg:w-[52vw]'>
        {footerSections.map(({ title, links, isPhoneSection }, idx) => (
          <div key={idx} className={idx !== 0 ? 'mt-10 lg:mt-0' : ''}>
            <h1 className='text-[1.3em] lg:text-[1.6em] lg:whitespace-nowrap font-bold'>{title}</h1>
            <div className='sub-links flex flex-col mt-2 gap-3'>
              {isPhoneSection
                ? links.map(({ text, underline }, i) => (
                    <a
                      key={i}
                      href=''
                      className={underline ? 'underline lg:text-[1.1em]' : 'lg:text-[1.1em]'}
                    >
                      {text}
                    </a>
                  ))
                : links.map((text, i) => <a key={i} href='' className='lg:text-[1.1em]'>{text}</a>)}
            </div>
          </div>
        ))}
      </div>
        </div> 
     

      <div className='copyright mt-5'>
        <hr className='' />
        <p className='text-center text-md mt-5'>
        Copyright 2025 Ayu Devices Pvt Ltd 
        </p>
      </div>
    </div>
  )
}

export default Footer
