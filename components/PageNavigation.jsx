import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import user from '../public/utils/user.png';
import pf1 from '../public/utils/pf1.jpeg';
import pf2 from '../public/utils/pf2.jpeg';
import About from './About';
import Comments from './Comments';
import LaunchDetails from './LaunchDetails';
import TrendingLaunches from './TrendingLaunches';

const PageNavigation = ({ upvotes, tags, impressions, rank, image }) => {
  const aboutRef = useRef(null);
  const commentsRef = useRef(null);
  const launchDetailsRef = useRef(null);
  const relatedLaunchesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='mt-20'>
      <div className='flex md:gap-7 gap-5 text-gray-400 overflow-x-auto overflow-y-hidden sm:overflow-x-hidden'>
        <button onClick={() => scrollToSection(aboutRef)} className='whitespace-nowrap rounded-3xl py-2 px-3 hover:bg-gray-800'>About Product</button>
        <button onClick={() => scrollToSection(commentsRef)} className='whitespace-nowrap rounded-3xl py-2 px-3 hover:bg-gray-800'>Comments</button>
        <button onClick={() => scrollToSection(launchDetailsRef)} className='whitespace-nowrap rounded-3xl py-2 px-3 hover:bg-gray-800'>Launch details</button>
        <button onClick={() => scrollToSection(relatedLaunchesRef)} className='whitespace-nowrap rounded-3xl py-2 px-3 hover:bg-gray-800'>Related launches</button>
      </div>
      <hr className='w-full border-b border-y-0 border-gray-800 mt-2 mb-12' />
      
      <div id="about-product" ref={aboutRef}>
        <About tags={tags} image={image}/>
      </div>
      
      <div id="comments" ref={commentsRef}>
        <Comments user={user} pf1={pf1} pf2={pf2} />
      </div>
      
      <div id="launch-details" ref={launchDetailsRef}>
        <LaunchDetails upvotes={upvotes} impressions={impressions} rank={rank} />
      </div>
      
      <div id="related-launches" ref={relatedLaunchesRef}>
        <TrendingLaunches />
      </div>
    </div>
  );
};

export default PageNavigation;
