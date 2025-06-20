import React from 'react'
import { Link } from 'react-scroll'
import DarkModeToggle from '../layout/DarkModeToggle'

const Navbar = () => {
  return (
    <header className='bg-teritary  dark:bg-gray-900 dark:text-white fixed z-10 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-4'>
      <div className='container flex flex-row justify-between items-center '>
        <div>
          <Link to='/' spy={true}  smooth={true} duration={500}><h1 className='font-semibold text-2xl text-secondary cursor-pointer hover:scale-105 transition duration-200 ease-in-out'>Big Burger</h1></Link>
        </div>
        <nav className='hidden md:flex gap-10 text-secondary font-semibold text-md'>
          <Link to='menu' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Menu</Link>
          <Link to='deals' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Hot Deals</Link>
          <Link to='special' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Special</Link>
          <Link to='review' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Review</Link>
        </nav>
        <div className='flex gap-4'>
          <DarkModeToggle/>
          <button className='bg-secondary px-2 py-2 text-white rounded-md hover:scale-105 transition duration-300 ease-in-out'>Order Now</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
