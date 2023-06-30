import React from 'react'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-[#993399] h-20 z-[9999]'>
        <div className='w-full max-w-[1100px] mx-auto h-full px-8 md:px-0 flex items-center justify-between'>
            <div>
              <img src="/assets/logo.png" alt="Logo do Açai" className='w-16' />
            </div>
            <nav className='flex gap-8 text-white font-semibold'>
              <a href="#about" className='hover:scale-95 duration-200'>SABINO AÇAI</a>
              <a href="#products" className='hover:scale-95 duration-200'>PRODUTOS</a>
            </nav>
            <div className='flex items-center gap-2 text-2xl text-white'>
              <a href="#" className='hover:scale-110 hover:rotate-2 duration-200'><AiFillFacebook /></a>
              <a href="#" className='hover:scale-110 hover:rotate-2 duration-200'><AiFillInstagram /></a>
            </div>
        </div>
    </header>
  )
}

export default Header