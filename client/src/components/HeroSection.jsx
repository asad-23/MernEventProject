import React from 'react'
import image from '../assets/resturant.jpg'

const HeroSection = React.forwardRef((props, ref) => {

  const dark = props.mode

  return (
    <section ref={ref} className='mt-[60px]'>
      <div className='w-full h-screen bg-center bg-cover bg-fixed' style={{backgroundImage: `url(${image})`}}>
        <div className='flex flex-col justify-center items-center h-full'>
          <div className={`${ dark ? 'bg-[#1E201E] text-[#F7F7F8]' : 'bg-[#F7F7F8] text-[#3A1078]'} py-4 px-6 m-4 rounded-lg`}>
          <h1 className='text-4xl md:text-5xl font-bold'>Vadaimma</h1>
          <p className='text-2xl py-4 tracking-wider'>Your Personal Dream Maker</p>
          <p>We believe that it is all about the BIG DREAMS and the small details!</p>
          <button className={`${ dark? 'text-[#1E201E] bg-[#F7F7F8]' : 'text-[#F7F7F8] bg-[#3A1078]'} px-4 py-2 rounded-md my-2`}>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection
