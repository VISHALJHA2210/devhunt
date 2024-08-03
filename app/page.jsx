import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PastWinners from '@/components/PastWinners'
import Timer from '@/components/Timer'
import Vote from '@/components/Vote'
import React from 'react'
import myimg from '../public/utils/myimg.jpg'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full bg-blueBG'>
      <Nav/> 
      <div className='w-[95%] max-w-[920px] mx-auto '>
        <Timer/>
        <Vote />
        <PastWinners/>
      </div>
      <Footer className="w-[%] max-w-[920px] mx-auto"/>
      <button className='group bg-blueBG border-l border-t border-dashed border-gray-500 rounded-tl-2xl py-1 px-3 text-lightOrange/70 fixed z-100 bottom-0 right-0 flex gap-2 items-center text-sm font-bold hover:text-lightOrange'>
        <p>Vishal Jha</p>
        <Image src={myimg} width={30} height={30} className='rounded-full transition group-hover:rotate-12 group-hover:scale-110 opacity-60 group-hover:opacity-100'/>
      </button>
    </div>
  )
}

export default page