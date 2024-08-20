import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import ToggleButton from './ToggleButton'


const Navbar = ({takeMode, scrollToSection}) => {

  // console.log(window.innerWidth)
  const link = ["Home", "Services", "About", "Contact"]


  const [dark, setDark] = useState(false)

  const handleToggleDark = (data) =>{
    setDark(data)
    takeMode(data)
  }


  return (
    <nav className='bg-[#3A1078] text-white top-0 left-0 fixed w-full z-10'>
      <div className='flex justify-between md:justify-around items-center max-w-[1500px] mx-auto'>
      <div className='md:hidden'>
          <div className='px-4'>
            <Menu>
              <MenuButton>
                <FiMenu className='text-3xl' />
              </MenuButton>

              <MenuItems className='flex flex-col w-[200px] mt-[24px] rounded-lg bg-[#4E31AA] transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0' transition anchor="bottom end">
                {
                  link.map((link, index) => {
                    return <MenuItem className='text-white py-2 cursor-pointer' key={index}><button onClick={() => scrollToSection({link})} >{link}</button></MenuItem>
                  })
                }
              </MenuItems>
            </Menu>
          </div>
        </div>
        <div className='font-bold p-4 text-4xl'>Vadaimma</div>
        <div className='justify-between items-center hidden md:flex'>
          {
            link.map((link, index) => {
              return <Link onClick={() => scrollToSection({link})} className='text-white px-4 cursor hover:translate-y-[-1px] hover:shadow-xl transition duration-300 ease-out' key={index}>{link}</Link>
            })
          }
        </div>
        <div className='m-4 flex items-center'>
          {
            !dark ? <FaLightbulb className='text-2xl m-2' /> : <FaRegLightbulb className='text-2xl m-2' />
          }
          <ToggleButton toggleFunction={handleToggleDark} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
