import React, { useState } from 'react';
import PropertyCard from "./PropertyCard";
import 'react-datepicker/dist/react-datepicker.css';
import PropertyData from "../Data/PropertyData";
import SearchBar from './SearchBar';

function RentPage() {
    const [filteredPropertyData, setFilteredPropertyData] = useState(PropertyData);
    const [propertyType, setPropertyType] = useState('Any');
    const [location, setLocation] = useState('Any');
    const [when, setWhen] = useState(null);
    const [price, setPrice] = useState('Any');

    const handleSearch = () => {
        const filtered = PropertyData.filter(property =>
            (location === 'Any' || property.location === location)
            &&
            (when === null || compareDates(property.availableDate, when))
            &&
            (price === 'Any' || checkPriceRange(property.price, price))
            &&
            (propertyType == 'Any' || property.propertyType === propertyType)
        );
        setFilteredPropertyData(filtered);
    }

    const compareDates = (date1, date2) => {
        const convertedDate1 = new Date(date1);
        const convertedDate2 = new Date(date2);
        console.log(convertedDate1, convertedDate2)
        return convertedDate1 <= convertedDate2;
    }

    const checkPriceRange = (propertyPrice, selectedPriceRange) => {
        if (selectedPriceRange === 'Above $7000') return propertyPrice >= 7000;
        console.log(selectedPriceRange);
        const min = selectedPriceRange.split('-')[0]?.substring(1);
        const max = selectedPriceRange.split('-')[1]?.substring(1);

        return propertyPrice >= min && propertyPrice <= max;
    }

    return (
        <div className='flex flex-col sm:mx-40'>
            <SearchBar
                location={location}
                setLocation={setLocation}
                when={when}
                setWhen={setWhen}
                price={price}
                setPrice={setPrice}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                handleSearch={handleSearch}
            />
            {filteredPropertyData.length > 0 ?
                <div className="flex flex-wrap">
                    {filteredPropertyData.map(property =>
                        <PropertyCard key={property.id} property={property} />
                    )}
                </div>
                :
                <div className='mt-2 mx-7'> No Results Found</div>
            }
        </div>
    )
}

export default RentPage;