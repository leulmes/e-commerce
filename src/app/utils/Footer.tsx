import React from 'react'

const updateDate = (): number => {
    const date = new Date();
    return date.getFullYear();
}
const Footer = () => {
  return (
    <div className='flex flex-row justify-center gap-4 bg-black items-center h-14 text-white mt-auto'>
        &copy; {updateDate()} | Hiwot Studio
    </div>
  )
}

export default Footer