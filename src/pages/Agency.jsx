import React, { useRef } from 'react'
import img1 from "../assets/Images/1.jpg"
import img2 from "../assets/Images/2.jpg"
import img3 from "../assets/Images/3.jpg"
import img4 from "../assets/Images/4.jpg"
import img5 from "../assets/Images/5.jpg"
import img6 from "../assets/Images/6.jpg"
import img7 from "../assets/Images/7.jpg"
import img8 from "../assets/Images/8.jpg"
import img9 from "../assets/Images/9.jpg"
import img10 from "../assets/Images/10.jpg"
import img11 from "../assets/Images/11.jpg"
import img12 from "../assets/Images/12.jpg"
import img13 from "../assets/Images/13.jpg"
import img14 from "../assets/Images/14.jpg"
import img15 from "../assets/Images/15.jpg"
import img16 from "../assets/Images/16.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  const imgDiv = useRef(null);
  const imgRef = useRef(null)

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
  
 useGSAP(() => {

  gsap.to(imgDiv.current,{
    scrollTrigger:{
      trigger:imgDiv.current,
      // markers:true,
      start:"top 25%",
      end:"top -160%",
      scrub:true,
      pin:true,
      onUpdate:(elem)=>{
    
        const index = Math.floor(elem.progress * images.length)

        imgRef.current.src = images[index >= images.length ? images.length -1 : index]
      }
    }
  })
 }, { dependencies: [], scope: imgDiv }) 


  return (
    <div className='font-[font-500] relative p-1 '>

    <div ref={imgDiv} className='section-1 h-[20vw] w-[15vw] absolute top-[15vh] left-[30vw] rounded-[4vh] overflow-hidden'>
    <img ref={imgRef} src={img1} alt={img1}  className='w-full h-full'/>
    </div>

      <div className='section-2 relative mt-[55vh]'>
      <h1 className=' text-center text-[20vw] leading-[18vw] uppercase'>
        SEVEN7Y
        <br />
        TWO
      </h1>
      </div>

      <div className='section-3 relative flex items-end ml-[42%] mt-10'><p className='text-[3vw]'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
        </p></div>

    <div className='h-[200vh]'></div>

    </div>

  )
}

export default Agency
