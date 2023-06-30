import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-[#993399]/70 w-full flex flex-col items-center text-center py-8'>
        <img src="/assets/logo.png" alt="Logo da SABINO AÇAI" className='w-[7rem] mb-4' />
        <strong className='text-lg text-black/70'>Contato</strong>
        <div className='flex items-center gap-2'>
            <BsFillTelephoneFill className='text-xl' />
            <span className='text-sm font-medium'>(17) 99247-1752</span>
        </div>
        <div className='w-full h-[2px] bg-black/20 my-8' />
        <span className='text-sm'>Sabino Açai 2023! Todos direitos reservados. &copy;</span>
    </footer>
  )
}

export default Footer