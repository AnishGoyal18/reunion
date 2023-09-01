import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

function PropertyCard({ property }) {
    const { image, location, address, availableDate, price, propertyType, beds, bathrooms, size } = property;

    return (
        <div className="rounded-lg shadow-lg flex flex-col space-y-3 w-[90%] sm:w-[28%] m-4">
            <img src={image} alt='Property' className='h-[150px] rounded-t-lg' />
            <div className="flex justify-between px-4">
                <div className="flex flex-col">
                    <span className="flex space-x-1 items-center text-xs font-semibold text-gray-200 bg-color2 rounded-lg px-3 py-1 w-fit -mt-[15%] -ml-[14%] mb-2">
                        <BsStars />
                        <span>POPULAR</span>
                    </span>
                    <span>
                        <span className="text-xl text-color2 font-bold">${price}</span>
                        <span className="text-sm text-gray-500">/month</span>
                    </span>
                    <span className="text-xl font-bold">{location}</span>
                    <span className="text-sm text-gray-500">{address}</span>
                    <span className="text-sm text-gray-500">Available: {availableDate}</span>
                    <span className="text-sm text-gray-500">Type: {propertyType}</span>
                </div>
                <div className="h-10 w-10 border rounded-full flex items-center justify-center">
                    <AiOutlineHeart className="text-color2 hover:text-color3 text-xl cursor-pointer" />
                </div>
            </div>
            <div className="border-b-2 "></div>
            <div className="flex justify-between text-sm text-gray-500 px-4 pb-4">
                <span>{beds} Beds</span>
                <span>{bathrooms} Bathrooms</span>
                <span>{size}</span>
            </div>
        </div>
    );
}

export default PropertyCard;