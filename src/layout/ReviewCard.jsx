import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

const ReviewCard = ({id,desc,name}) => {
  return (
    <div 
    className='w-full md:w-2/4 text-center mx-auto space-y-3 bg-teritary p-5 rounded-lg mb-3 cursor-pointer' key={id}>
      <RiDoubleQuotesL size={65} className='mx-auto text-primary'/>
      <p className='font-semibold text-2xl'>{desc}</p>
      <h2 className='font-semibold text-center'>{name}</h2>
    </div>
  )
}

export default ReviewCard
