import React from 'react'
import { FaBars } from "react-icons/fa6";
const Navbar = () => {

    const Links = ["products", "solution", "partner", "Company"]

    return (
        <div className='w-full px-4 lg:px-[5vw] py-6 flex items-center justify-between bg-black text-white'>
            <img src="https://www.ayusynk.ai/wp-content/uploads/2024/07/logo-1.png" alt="" />

            <div className='links hidden lg:flex lg:gap-10 '>
                {Links.map((link, index) =>{
                    return <a className='text-[1.1em] capitalize' key={index} href=''>{link}</a>
                })}
            </div>

            <div className='icons flex items-center gap-4'>
                <a className='' href="">
                    <img  src="https://www.ayusynk.ai/wp-content/uploads/2024/07/shopping-bag-1.png" alt="" />
                </a>
                <FaBars className='text-xl block lg:hidden' />
            </div>
        </div>
    )
}

export default Navbar