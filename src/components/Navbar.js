import React from 'react';
import { SiAdobeacrobatreader } from 'react-icons/si';
import { BsChevronDown } from 'react-icons/bs';

function Navbar() {
    return (
        <>
            <div className='flex justify-between sticky top-0 overflow-hidden px-5 sm:px-14 py-3 shadow-md bg-color1'>
                <div className='flex items-center space-x-10'>
                    <div className='flex space-x-2 items-center text-lg sm:text-2xl font-bold cursor-pointer'>
                        <SiAdobeacrobatreader className='text-3xl text-color3 font-bold' />
                        <span>ReUnion</span>
                    </div>
                    <div className='hidden sm:flex space-x-5 align-baseline font-semibold'>
                        <span className='text-color2 bg-color2 bg-opacity-10 px-3 py-1 cursor-pointer'>Rent</span>
                        <span className='hover:text-color2 hover:bg-color2 hover:bg-opacity-10 px-3 py-1 cursor-pointer'>Buy</span>
                        <span className='hover:text-color2 hover:bg-color2 hover:bg-opacity-10 px-3 py-1 cursor-pointer'>Sell</span>
                        <span className='flex space-x-1 items-center hover:text-color2 hover:bg-color2 hover:bg-opacity-10 px-3 py-1 cursor-pointer'>
                            <span>Manage Property</span>
                            <BsChevronDown className='font-bold' />
                        </span>
                        <span className='flex space-x-1 items-center hover:text-color2 hover:bg-color2 hover:bg-opacity-10 px-3 py-1 cursor-pointer'>
                            <span>Resourses</span>
                            <BsChevronDown className='font-bold' />
                        </span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button
                        className='border border-color2 text-color2 hover:text-color1 hover:bg-color2  rounded-lg py-2 px-3 sm:px-5 mr-1 sm:mr-4'
                    >
                        Log In
                    </button>
                    <button
                        className='bg-color2 hover:bg-color3 text-color4 rounded-lg py-2 px-3 sm:px-5'
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
