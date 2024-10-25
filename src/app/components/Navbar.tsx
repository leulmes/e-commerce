import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
require('dotenv').config()

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
          <Link href={`${process.env.SITE_URL}/shop`}>
            <h1>Shop</h1>
          </Link>
          <h1>Book Now</h1>
        </div>
        
    </div>
  )
}

export default Navbar