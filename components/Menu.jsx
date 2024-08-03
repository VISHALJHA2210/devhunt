import React, { useState, useEffect, useRef } from 'react';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); 
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`block lg:hidden ${isMenuOpen ? '' : 'hidden'}`}>  
      <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10'></div>
      <div ref={menuRef} className='w-[95%] max-w-[1000px] fixed top-32 left-1/2 transform -translate-x-1/2 rounded-lg z-20 bg-blueBG p-4'>
        <div className='flex flex-col gap-5 text-gray-400'>
          <button className='flex gap-2 transition hover:text-white'>
            <i className="fi fi-rs-bell text-lg"></i>
            Subscribe
          </button>
          <button className='flex gap-2 transition hover:text-white'>
            Browse Tools
            <i className="fi fi-rs-angle-small-down text-xl"></i>
          </button>
          <button className='flex gap-2 transition text-lightOrange'>
            Advertise
          </button>
          <button className='flex gap-2 transition bg-lightOrange hover:bg-darkOrange text-white rounded-lg px-3 py-2 w-full'>
            <span className='mx-auto'>Submit your dev tool</span>
          </button>
          <button className='flex gap-2 w-20 transition bg-gray-700/70 text-white rounded-lg px-3 py-2'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
