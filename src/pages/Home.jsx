import React from 'react'
import Video from '../Components/home/video'
import HomeBottom from '../Components/home/homeBottom'
import HomeMainText from '../Components/home/homeMainText'

const Home = () => {
  return (
<div className='h-screen w-full'>
    <div className='h-screen w-screen fixed object-contain'>
      <Video/>
    </div>

    <div className='h-full w-full relative flex flex-col justify-between'>

    <HomeMainText/>
    <HomeBottom/>

    </div>


</div>

  )
}

export default Home
