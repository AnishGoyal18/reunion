import React from 'react';
import { CiSearch } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import { locationOptions, priceOptions, propertyTypeOptions } from "../Data/FilterOptionsData";

function SearchBar(props) {
    const { location, setLocation, when, setWhen, price, setPrice, propertyType, setPropertyType, handleSearch } = props;
    return (
        <>
            <div className='hidden sm:flex justify-between m-4 mt-12'>
                <span className='text-3xl font-bold'>Search properties to rent</span>
                <span className='flex space-x-2 items-center border border-gray-1 text-sm text-gray-500 px-4 py-2 mr-10'>
                    <span>Search with Searchbar</span>
                    <CiSearch className='cursor-pointer' />
                </span>
            </div>
            <div className='flex flex-col w-[90%] sm:flex-row justify-between m-4 px-4 py-6 bg-white mr-14'>
                <span className='flex flex-col'>
                    <span className='text-sm text-gray-500 font-semibold'>Location</span>
                    <select
                        className='border px-3 py-2 rounded-md focus:outline-none focus:border-color2'
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    >
                        {locationOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </span>
                <span className='hidden sm:block border-r-2 bg-color1'></span>
                <span className='hidden sm:flex flex-col'>
                    <span className='text-sm text-gray-500 font-semibold'>When</span>
                    <DatePicker
                        className='border px-3 py-2 rounded-md focus:outline-none focus:border-color2'
                        selected={when}
                        placeholderText='Available Date'
                        onChange={date => setWhen(date)}
                    />
                </span>
                <span className='hidden sm:block border-r-2 bg-color1'></span>
                <span className='hidden sm:flex flex-col'>
                    <span className='text-sm text-gray-500 font-semibold'>Price</span>
                    <select
                        className='border px-3 py-2 rounded-md focus:outline-none focus:border-color2'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    >
                        {priceOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </span>
                <span className='hidden sm:block border-r-2 bg-color1'></span>
                <span className='hidden sm:flex flex-col'>
                    <span className='text-sm text-gray-500 font-semibold'>Property Type</span>
                    <select
                        className='border px-3 py-2 rounded-md focus:outline-none focus:border-color2'
                        value={propertyType}
                        onChange={e => setPropertyType(e.target.value)}
                    >
                        {propertyTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </span>
                <span className='border-r-2 bg-color1'></span>
                <button
                    className='text-sm bg-color2 px-7 py-2 sm:py-0 my-2 text-color4 hover:bg-color3  rounded-lg'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchBar;