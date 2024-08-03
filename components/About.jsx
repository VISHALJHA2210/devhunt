import React from 'react'
import Image from 'next/image'

const About = ({tags,image}) => {
  return (
    <div>
      <p className='text-gray-300 text-md md:text-lg '>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Cubilia vitae nisl sapien eu, rhoncus habitant himenaeos. Nam rhoncus maximus ornare suscipit laoreet velit. Laoreet condimentum pharetra orci luctus dictum morbi duis. Suspendisse tellus porttitor habitant litora tortor. Ac aliquet consequat volutpat erat maecenas torquent. Consequat faucibus ornare porta convallis ante hac eros accumsan.
      </p>
      <p className='text-gray-400 text-md mt-6 flex items-center gap-2'>
        Classified in 
        <span className='ml-2 flex gap-3'>
          {tags.map((tag, i) => (
            <span key={i}>
              <button className='border border-gray-700 rounded-full px-3 py-0.5 bg-gray-800/50'>
                {tag}
              </button>
            </span>
          ))}
        </span>
      </p>

      <div className='mt-16'>
        <Image src={image} alt='Related Image' width={500} className='rounded-xl' />
      </div>
    </div>
  )
}

export default About