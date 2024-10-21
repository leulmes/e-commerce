import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex flex-row bg-black text-white'>
        <div className='cursor-pointer'>
          <Image src='/hs-image.png' width='100' height='100' alt='logo'/>
        </div>
        
        <div className='cursor-pointer flex flex-row gap-4 items-center'>
          <h1>Services</h1>
          <h1>Gallery</h1>
          <h1>About</h1>
          <h1>Shop</h1>
          <h1>Book Now</h1>
        </div>
        
    </div>
  )
}

export default Navbar