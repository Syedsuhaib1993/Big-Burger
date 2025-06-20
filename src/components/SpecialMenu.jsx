import React from 'react'
import img1 from '../assets/menu2.jpg'
import img2 from '../assets/menu3.jpg'
import img3 from '../assets/menu4.jpg'
import SpecialMenuCard from '../layout/SpecialMenuCard'

const SpecialMenu = () => {
  return (
    <div className='dark:bg-gray-900'>
      <div className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5 md:pt-0 pt-16'>
        {/* heading */}
        <h1 className="font-semibold text-3xl text-secondary text-center my-8 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">Special Menu</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5'>
            <SpecialMenuCard img={img1} title='Jungle Burger' price='$25.00'/>
            <SpecialMenuCard img={img2} title='Delight Burger' price='$28.25'/>
            <SpecialMenuCard img={img3} title='Sendrela Burger' price='$32.50'/>
        </div>
      </div>

    </div>
  )
}

export default SpecialMenu
