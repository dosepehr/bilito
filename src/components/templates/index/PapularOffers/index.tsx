'use client';
import React, { useState } from 'react';
import CitySelector from './CitySelector';

import OfferItem from './OfferItem';
const PapularOffers = () => {
    const [activeCity, setActiveCity] = useState<string>('tehran');
    return (
        <div className='mt-14'>
            <p className='text-black font-ISBold text-lg mb-4'>
                پرطرفدار ترین پروازهای داخلی
            </p>
            <CitySelector
                activeCity={activeCity}
                setActiveCity={setActiveCity}
            />
            <div className='grid grid-cols-4 justify-items-center mt-8'>
                <OfferItem />
                <OfferItem />
                <OfferItem />
                <OfferItem />
            </div>
        </div>
    );
};

export default PapularOffers;
