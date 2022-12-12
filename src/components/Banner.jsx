import React from 'react'
import Image from '../banner.jpg';

export const Banner = () => {
  return (
    <div className= {`bg-[url(${Image})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end justify-center`}>
        <div className='text:xl md:text-3xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center' > Black Adam</div>
      
    </div>
  )
}


