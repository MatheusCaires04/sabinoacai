import React from 'react'

const Banner = () => {
  return (
    <div className='pt-20 w-full h-screen bg-[#993399] relative'>
        <div className='h-full w-full max-w-[1100px] mx-auto'>
            <div className='w-[50%] h-full flex flex-col justify-center'>
                <h1 className='text-5xl text-[#f0ddee] font-titleBanner font-bold'>SABINO AÇAI</h1>
                <h1 className='text-2xl text-[#f0ddee] font-titleBanner font-bold pt-1 pb-3'>O MELHOR AÇAI DA CIDADE E REGIÃO</h1>
                <p className='text-lg font-medium text-white'>
                    Peça o melhor açai no <strong className='text-[#e0bcdd] underline'>SABINO AÇAI</strong> e tenha o melhor sabor com as melhores combinações. Perfeição existe e está no <strong className='text-[#e0bcdd] underline'>SABINO AÇAI</strong>.
                </p>
            </div>
            <img src="/assets/banner.png" alt="Copo de açai com frutas em cima" className='absolute bottom-0 right-0 w-[38rem]' />
        </div>
    </div>
  )
}

export default Banner