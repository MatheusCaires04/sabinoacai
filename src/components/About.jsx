import React from 'react'

const About = () => {
  return (
    <div className='w-full py-16 px-8 md:px-0'>
        <div className='max-w-[1100px] mx-auto text-center'>
            <h1 className='text-5xl font-titleBanner font-bold' data-aos='fade-up' data-aos-duration="2000">Um pouco sobre nós...</h1>
            <div className='mt-4 grid grid-cols-2 items-center'>
            <div data-aos='fade-right' data-aos-duration="2000">
            <p className='text-start text-lg font-medium'>
                Com uma idéia inovadora, nós da <strong className='text-[#993399] underline'>SABINO AÇAI</strong> criamos está empresa pensando no melhor e mais perfeito açai da região, e junto disso, com todo conforto e comodidade aos nossos clientes. Com isto, nossa empresa empresa trabalha totalmente com <span className='text-[#993399]/70 font-semibold'>DELIVERY</span> e <span className='text-[#993399]/70 font-semibold'>RETIRADA</span> utilizando-se dos melhores produtos.
            </p>
            </div>
            <div className='flex justify-center' data-aos='fade-right' data-aos-duration="2500">
            <img src="/assets/slider1.png" alt="Foto de 3 copos de açai" className='w-[25rem]' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default About