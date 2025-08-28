import React from 'react'
import VideoSrc from '../../assets/video.mp4'


const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-screen w-screen  object-cover' autoPlay muted loop src={VideoSrc}></video>

    </div>
  )
}

export default Video
