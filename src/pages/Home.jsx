import React from 'react'
import Video from '../Components/home/Video.jsx'
import HomeBottom from '../Components/home/HomeBottom.jsx'
import HomeMainText from '../Components/home/HomeMainText.jsx'

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
