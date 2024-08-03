import React from 'react'
import Image from 'next/image'

const Comments = ({user, pf1, pf2}) => {
  return (
    <div>
        <div className='mt-32'>
        <p className='text-gray-200 md:text-lg text-md font-semibold'>Comments, support and feedback</p>

        <div className='mt-10 flex gap-4'>
            <Image src={user} className='w-12 h-12'/>
            <div className='w-full flex flex-col items-end gap-2'>
              <div className='w-full'>
                <textarea className='w-full h-32 p-3 bg-transparent border text-white border-gray-700 rounded-lg placeholder:md:text-md placeholder:text-sm' placeholder='Type here...'></textarea>
              </div>
              <button className=' text-white px-3 py-2 rounded-lg bg-greyBG hover:bg-gray-700'>Comment</button>
            </div>
        </div>
          
        <div className='mt-5'>
          <div className='flex gap-4 items-start justify-center'>
            <Image src={pf1} className='w-12 h-12 rounded-full'/>
            <div className='w-full flex flex-col items-start gap-2'>
              <div className='w-full'>
                <div className='flex gap-3'>
                  <p className='text-gray-200 text-md'>Kvendingoldo</p>
                  <div className='bg-purple-500 text-white px-2 pt-1 rounded-full text-sm '>Maker</div>
                </div>
                <p className='text-gray-400 text-sm'>3 days ago</p>
              </div>
              <div>
                <p className='text-gray-300 text-sm md:text-[1.02rem] w-[90%]'>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia vitae nisl sapien eu, rhoncus habitant himenaeos. Nam rhoncus maximus ornare suscipit laoreet velit. Laoreet condimentum pharetra orci luctus dictum morbi duis. Suspendisse tellus porttitor habitant litora tortor. Ac aliquet consequat volutpat erat maecenas torquent. Consequat faucibus ornare porta convallis ante hac eros accumsan.
                </p>
                <button className=' flex gap-2 bg-gray-700/30 px-2.5 mt-2 pt-1 pb-0.5 items-center rounded-full border border-gray-700'>
                    <i className="fi fi-ss-heart text-sm text-red-700 mt-1"></i>
                    <span className='text-gray-200 text-sm'>2</span>
                </button>
              </div>
            </div>
          </div>

          <hr className='border-b border-dotted border-gray-800 my-8'/>

          <div className='flex gap-4 items-start justify-center'>
            <Image src={pf1} className='w-12 h-12 rounded-full'/>
            <div className='w-full flex flex-col items-start gap-2'>
              <div className='w-full'>
                <div className='flex gap-3'>
                  <p className='text-gray-200 text-md'>Kvendingoldo</p>
                  <div className='bg-purple-500 text-white px-2 pt-1 rounded-full text-sm '>Maker</div>
                </div>
                <p className='text-gray-400 text-sm'>3 days ago</p>
              </div>
              <div className='w-full'>
                <div className='w-full text-gray-500 px-3 py-3 border border-gray-700 bg-gray-700/30 rounded-lg'>This comment has been deleted.</div>
              </div>
            </div>
          </div>
          <hr className='border-b border-dotted border-gray-800 my-8'/>

          <div className='flex gap-4 items-start justify-center'>
            <Image src={pf2} className='w-12 h-12 rounded-full'/>
            <div className='w-full flex flex-col items-start gap-2'>
              <div className='w-full'>
                <div className='flex gap-3'>
                  <p className='text-gray-200 text-md'>Hagi</p>
                </div>
                <p className='text-gray-400 text-sm'>3 days ago</p>
              </div>
              <div>
                <p className='text-gray-300 text-sm md:text-[1.02rem] w-[90%]'>
                  Nice !
                  Will try to integrate tenv with www.fine.dev - hopefully can bring an AI agent to the tenv community. 
                </p>
                <button className=' flex gap-2 bg-gray-700/30 px-2.5 mt-2 pt-1 pb-0.5 items-center rounded-full border border-gray-700'>
                    <i className="fi fi-ss-heart text-sm text-red-700 mt-1"></i>
                    <span className='text-gray-200 text-sm'>2</span>
                </button>
              </div>
            </div>
          </div>
          
          <hr className='border-b border-dotted border-gray-800 my-8'/>

        </div>

      </div>
    </div>
  )
}

export default Comments