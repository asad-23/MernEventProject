import React from 'react'
import birthday from '../assets/birthday.jpg'
import wedding from '../assets/wedding.jpg'
import anniversary from '../assets/anniversary.jpg'
import camping from '../assets/camping.jpg'
import party from '../assets/party.jpg'
import gamenight from '../assets/gamenight.jpg'

const Services = React.forwardRef((props, ref) => {

  const services = [
    {
      id: 1,
      title: 'Birthday Party',
      url: birthday,
      alt: "Birthday party image"
    },
    {
      id: 2,
      title: 'Wedding Party',
      url: wedding,
      alt: "Wedding party image"
    },
    {
      id: 3,
      title: 'Anniversary Party',
      url: anniversary,
      alt: "Corporate party image"
    },
    {
      id: 4,
      title: 'Gaming Night',
      url: gamenight,
      alt: "Birthday party image"
    },
    {
      id: 5,
      title: 'camping Party',
      url: camping,
      alt: "Wedding party image"
    },
    {
      id: 6,
      title: 'Together Party',
      url: party,
      alt: "Corporate party image"
    }
  ]

  const dark = props.mode

  return (
    <div ref={ref}  className={`${dark ? 'text-[#F7F7F8]' : 'text-black'} max-w-[1500px] mx-auto`}>
      <h5 className={`${dark ? 'text-[#F7F7F8]' : 'text-[#3A1078]'} text-5xl font-semibold text-center mt-[30px]`}>Our Services</h5>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4'>
        {
          services.map((service) => {
            return <div className='m-6 hover:translate-y-[-8px] hover:shadow-xl transition duration-300 ease-out' key={service.id}>
              <h3 className='text-2xl font-bold text-center'>{service.title}</h3>
              <img className='w-full h-auto bg-center bg-cover' src={service.url} alt={service.alt} />
            </div>
          })
        }
      </div>
    </div>
  )
})

export default Services
