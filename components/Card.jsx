"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ key,image, title = '', body, tags, impressions, upvotes: initialUpvotes }) => {
  const [upvotes, setUpvotes] = useState(Number(initialUpvotes));
  const [clicked, setClicked] = useState(false);

  const handleUpvote = () => {
    setUpvotes(clicked ? upvotes - 1 : upvotes + 1);
    setClicked(!clicked);
  };

  const dynamicRoute = `/tool/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <>
      
      <div className="w-full py-8 px-4 rounded-2xl group transition hover:bg-greyBG">
        <div className="flex justify-between">
          <Link 
            href={{
              pathname: dynamicRoute,
              query:{
                upvotes: upvotes,
                clicked: clicked,
                title: title,
                body: body,
                tags: tags,
                impressions: impressions,
                key: key,
                image: image,
                dynamicRoute: dynamicRoute,
              }
            }}
              
          >
            <div className="flex gap-5 cursor-pointer">
              <Image src={image} width={70} height={70} className="w-16 h-16 rounded-full" alt={title} />
              <div className="w-[60%] sm:w-full ">
                <div className='flex gap-3 group'>
                  <h2 className="text-white sm:text-lg text-md">{title}</h2>
                  <i className="fi fi-rr-share-square text-white mt-0.5 hidden group-hover:block"></i>
                </div>
                <p className="text-gray-400 sm:text-lg leading-tight text-sm -mt-1">{body}</p>
                <div className="flex flex-wrap leading-tight sm:gap-3 gap-2 text-gray-400 mt-2 sm:text-md text-sm">
                  {tags && tags.length > 0 && tags.map((tag, i) => (
                    <div className="flex sm:gap-3 gap-2 items-center" key={i}>
                      <p>{tag}</p>
                      <span className="text-3xl -mt-4">.</span>
                    </div>
                  ))}
                  <div className="w-full sm:hidden"></div>
                  <p className="sm:mt-0">{impressions} Impressions</p>
                </div>
              </div>
            </div>
          </Link>
          <button className={'sm:w-16 w-24 sm:h-16 h-12 sm:text-md text-sm border ' + (!clicked ? 'border-gray-700 text-gray-400 hover:text-orange-300' : 'border-orange-700 text-lightOrange') + ' transition rounded-lg bg-upvote-grad flex flex-col leading-tight justify-center items-center active:scale-100 '} onClick={handleUpvote}>
            <i className="fi fi-ss-triangle text-sm"></i>
            <p>{upvotes}</p>
          </button>
        </div>
      </div>
      <hr className='w-[98%] border-gray-800 mx-auto'/>
    </>
  );
};

export default Card;
