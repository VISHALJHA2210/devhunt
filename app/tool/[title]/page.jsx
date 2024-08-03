"use client";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import tenv1 from '../../../public/utils/tenv1.jpeg';
import Nav from '@/components/Nav';
import Link from 'next/link';
import PageNavigation from '@/components/PageNavigation';

const Page = () => {

  const searchParams = useSearchParams();
  
  const upvotes = searchParams.get('upvotes');
  const clicked = searchParams.get('clicked');
  const title = searchParams.get('title');
  const body = searchParams.get('body');
  const tags = searchParams.getAll('tags');
  const impressions = searchParams.get('impressions');
  const key = searchParams.get('key');
  console.log(key)
  
  const [upvote, setUpvote] = useState(Number(upvotes));
  const [isClicked, setIsClicked] = useState(clicked);
  
  const handleUpvote = () => {
    setUpvote(isClicked ? upvote - 1 : upvote + 1);
    setIsClicked(!isClicked);
  };
  
  return (
    <>
      <div className='fixed w-full h-full bg-blueBG'>
        <Nav />
        <div className='absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm'></div>
      </div>
      <div className='relative w-full h-screen overflow-y-auto'>
        <div className='flex items-center justify-center mt-0 md:mt-10 min-h-full'>
          <div className='relative mx-auto md:w-[98%] w-full max-w-[1000px] rounded-lg z-10 bg-blueBG px-5 lg:px-28 pt-12'>

            <Link href="/">
              <button className='text-white flex gap-2 items-center border border-gray-600 px-5 py-1.5 rounded-md md:text-lg text-md hover:bg-gray-400/10'>
                <i className="fi fi-rr-arrow-left mt-1"></i>
                Go back
              </button>
            </Link>

            <div className='mt-12 flex flex-col gap-3'>
              <Image src={tenv1} className='w-[4.5rem] rounded-full'/>
              <h2 className='text-white text-lg'>{title}</h2>
              <p className='text-gray-400 md:text-lg text-md -mt-3'>{body}</p>
              <div className='flex gap-4'>
                <button className='text-white flex gap-2 items-center text-sm md:text-md lg:text-[1.05rem] px-3 py-2 rounded-lg bg-gray-700 transition hover:bg-gray-800'>
                  Live Preview
                  <i className="fi fi-rr-share-square mt-1"></i>
                </button>

                <button className={'flex gap-3 items-center text-sm md:text-md lg:text-[1.05rem] px-3 py-2 rounded-lg ' + (isClicked ? ' border border-lightOrange text-lightOrange transition hover:scale-105' : 'border border-white text-white transition hover:scale-105 bg-lightOrange hover:bg-darkOrange')} onClick={handleUpvote}>
                  <span className='flex gap-3 items-center'>
                    <i className="fi fi-ss-triangle mt-1"></i>
                    <span>{upvote}</span>
                    <div>|</div>
                  </span>
                  <span>{isClicked ? "Upvoted" : "Upvote"}</span>
                </button>
              </div>
            </div>

            <PageNavigation upvotes={upvotes} tags={tags} impressions={impressions} rank={key} image={tenv1}/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
