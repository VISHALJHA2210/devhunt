import React from 'react'
import Image from 'next/image'
import logo from '../public/utils/logo.png'
import Link from 'next/link'
import footerimg from '../public/utils/footerimg.png'

const Footer = () => {
  return (
    <div className='w-[95%] max-w-[1300px] mx-auto mt-24 pb-5'>
      <hr className='border-gray-800'/>
      <div className='w-full mx-auto pt-10 text-center'>
        <Image src={logo} width={150} className='md:mx-auto pb-3' alt='Logo'/>
        <p className='text-left md:text-center text-gray-300 md:text-[1.1rem] text-md'>A launchpad for dev tools, built by developers. Open-source and fair.</p>
        <ul className='flex mt-6 gap-5 flex-col md:flex-row items-start justify-center md:items-center text-gray-400 text-sm md:text-md lg:text-[1.05rem]'>
          <li className='transition hover:text-white cursor-pointer'>About</li>
          <li className='transition hover:text-white cursor-pointer'>Github Repository</li>
          <li className='transition hover:text-white cursor-pointer'>Blog</li>
          <li className='transition hover:text-white cursor-pointer'>Contact</li>
          <li className='transition hover:text-white cursor-pointer'>OSS Friends</li>
          <li className='transition hover:text-white cursor-pointer'>NextJS Starter</li>
          <li className='transition hover:text-white cursor-pointer'>Open Source Alternatives</li>
          <li className='transition hover:text-white cursor-pointer'>Vishal Jha(CEO)</li>
        </ul>
      </div>
      <div className='flex justify-between text-gray-400 mt-10'>
        <div className=''>
          <p className='md:text-sm text-[0.9rem]'>© 2023 Dev Hunt. Member of <Link href="https://mars-x-clone.vercel.app/" className='text-white'>MarsX.Dev</Link> family.</p>
          <div className='md:text-sm text-[0.7rem] flex flex-col gap-1 mt-2'>
            <p>
              Uses & Sponsored by <span className='text-white'>FloatUI, Sensorpro, CountVisits, SEObotAI, ListingBott, IndexRusher, UnicornPlatform.</span>
            </p>
            <p>
              Built by <span className='text-white'>@johnrushx, @sidi_jeddou_dev, @vitalik_may, @BotanMan, @chris_byrne, see all</span>.
            </p>
            <p className='cursor-pointer'>
              Status page
            </p>
            <Image src={footerimg} className="w-36 mt-2" alt='Footer image'/>
          </div>
        </div>
        <div className='flex'>
          <i className="fi fi-brands-twitter text-2xl self-center cursor-pointer transition hover:text-white"></i>
        </div>
      </div>

    </div>
  )
}

export default Footer