import React from 'react'
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div className='w-full p-4 flex items-center justify-between bg-black text-white'>
            <img src="https://www.ayusynk.ai/wp-content/uploads/2024/07/logo-1.png" alt="" />

            <div className='icons flex items-center gap-4'>
                <a className='' href="">
                    <img  src="https://www.ayusynk.ai/wp-content/uploads/2024/07/shopping-bag-1.png" alt="" />
                </a>
                <FaBars className='text-xl' />
            </div>
        </div>
    )
}

export default Navbar