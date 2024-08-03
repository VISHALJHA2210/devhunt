"use client"

import React, { useState, useEffect, useRef } from 'react';
import logo from '../public/utils/logo.png';
import Image from 'next/image';
import DropDown from './DropDown';
import Menu from './Menu';
import Link from 'next/link';

const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative'>
            <div className='w-full py-4 px-3 bg-blueBG border-b border-gray-800'>
                <div className='flex justify-between items-center xl:w-[85%] mx-auto'>
                    <Link href="/">
                        <Image src={logo} alt='Logo' width={145} height={100}/>
                    </Link>

                    <div className='text-gray-400 font-light flex gap-7 mt-1 sm:pr-10 pr-2 lg:hidden'>
                        <button>
                            <i className="fi fi-rr-search text-lg"></i>         
                        </button>
                        <button onClick={() => setIsMenuOpen(prevVal => !prevVal)}>
                            <i className="fi fi-rr-menu-burger text-lg"></i>
                        </button>
                    </div>

                    <div className='lg:flex hidden gap-6 text-gray-400 items-center pr-8'>
                        <button className='flex gap-2 transition hover:text-white'>
                            <i className="fi fi-rs-bell text-lg"></i>
                            Subscribe
                        </button>
                        <button className='flex gap-2 transition hover:text-white'>
                            <i className="fi fi-rr-search text-lg"></i>
                        </button>
                        <button 
                            className='flex gap-2 transition hover:text-white' 
                            onClick={() => setIsDropdownOpen(prevVal => !prevVal)}
                            ref={dropdownRef}
                        >
                            Browse Tools
                            <i className="fi fi-rs-angle-small-down text-xl "></i>
                        </button>
                        <button className='flex gap-2 transition text-lightOrange'>
                            Advertise
                        </button>
                        <button className='flex gap-2 transition bg-lightOrange hover:bg-darkOrange text-white rounded-lg px-3 py-2 shake-on-reload'>
                            Submit your dev tool
                        </button>
                        <button className='flex gap-2 transition bg-gray-700/70 text-white rounded-lg px-3 py-2'>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <Menu/>
            )}

            {isDropdownOpen && <DropDown />}
        </div>
    )
}

export default Nav;
