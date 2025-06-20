import React from 'react'
import img from '../assets/menu1.png'

const MenuCard = ({id,title,price}) => {
  return (
    <div className='group  hover:bg-primary transition duration-300 ease-in-out relative space-y-2 bg-white cursor-pointer p-4 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' 
    key={id}>
      <img className='absolute w-40 -right-6 sm:-right-14 bottom-0 mr-2 group-hover:-translate-y-8 transition duration-200 ease-in-out' src={img} alt="burger" />
      <h1 className='text-2xl font-semibold text-primary group-hover:text-black'>{title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, sapiente!</p>
      <h3 className='font-semibold text-2xl text-secondary'>{price}</h3>
    </div>
  )
}

export default MenuCard
