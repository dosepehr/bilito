import FlightSearch from '@/components/modules/FlightSearch/FlightSearch';
import Hero from '@/components/modules/Hero/Hero';
import React from 'react';

const page = () => {
    return (
        <>
            <Hero />
            <div className='w-[85%] mx-auto'>
                <FlightSearch />
            </div>
        </>
    );
};

export default page;

