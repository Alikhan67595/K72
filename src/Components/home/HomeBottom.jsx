import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font-500]  flex gap-2 text-white justify-center items-center mb-[10px]'>

      <Link className='uppercase text-[7vw] border-2 rounded-full p-[15px] leading-15 px-7 pt-7 hover:border-[#D3FD50] hover:text-[#D3FD50] ' to='/work'>Work</Link>

      <Link className='uppercase text-[7vw] border-2 rounded-full p-[15px] leading-15 px-7 pt-7 hover:border-[#D3FD50] hover:text-[#D3FD50] ' to='/agency'>Agency</Link>
    </div>
  )
}

export default HomeBottom
