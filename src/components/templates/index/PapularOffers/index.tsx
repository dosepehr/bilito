'use client'

import React, { useState } from 'react';
import CitySelector from './CitySelector';

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
        </div>
    );
};

export default PapularOffers;
