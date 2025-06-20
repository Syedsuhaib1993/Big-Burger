import React from 'react'
import MenuCard from '../layout/MenuCard'

const Menu = () => {
    const CardData = [
        {id:1, title:'Tango burger', price:"$20"},
        {id:2, title:'Mega burger', price:"$40"},
        {id:3, title:'Double burger', price:"$30"},
        {id:4, title:'Twist burger', price:"$25"},
        {id:5, title:'Cheesy burger', price:"$35"},
        {id:6, title:'Creamy burger', price:"$28"},
        
    ]
  return (
    <div className='bg-teritary dark:bg-gray-900'>
      <div className='min-h-screen container flex flex-col justify-center py-4'>
        {/* Heading content */}
        <h1 className='font-semibold text-3xl text-center text-secondary mt-4'>Explore our Menu</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 pt-8 '>
        {CardData.map((item)=>
        (
            <MenuCard id={item.id} title={item.title} price={item.price}/>
        )
        )
        }
      </div>
      </div>
    </div>
  )
}

export default Menu
