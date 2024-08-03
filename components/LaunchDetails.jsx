import React from 'react'
import Image from 'next/image'

const LaunchDetails = ({upvotes, impressions, rank}) => {
  return (
    <div>
        <div className='mt-28'>
            <p className='text-gray-200 md:text-lg text-md font-semibold'>About this launch</p>
            <p className='mt-4 text-gray-400 md:text-[1.1rem] text-md'>tenv was launched by <span className='text-lightOrange cursor-pointer'>kenvendingoldo</span> 5 days ago</p>

            <div className='mt-8 grid lg:grid-cols-3 grid-cols-2 gap-5'>
                <div className='border-l border-gray-700 p-4'>
                    <div className='flex flex-col justify-center ml-3'>
                        <p className='md:text-xl text-lg text-gray-200'>{upvotes}</p>
                        <span className='flex gap-3 items-center text-gray-400'>
                            <i className="fi fi-ss-triangle mt-1"></i>  
                            <span>Upvotes</span>
                        </span>
                    </div>
                </div>

                <div className='border-l border-gray-700 p-4'>
                    <div className='flex flex-col justify-center ml-3'>
                        <p className='md:text-xl text-lg text-gray-200'>{impressions}</p>
                        <span className='flex gap-3 items-center text-gray-400'>
                            <i className="fi fi-ss-fire-flame-curved mt-1"></i>
                            <span>Impressions</span>
                        </span>
                    </div>
                </div>

                <div className='border-l border-gray-700 p-4'>
                    <div className='flex flex-col justify-center ml-3'>
                        <p className='md:text-xl text-lg text-gray-200'>#1</p>
                        <span className='flex gap-3 items-center text-gray-400'>
                            <i class="fi fi-br-chart-simple mt-1"></i>
                            <span className='text-md'>Week rank</span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LaunchDetails