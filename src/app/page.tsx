import FlightSearch from '@/components/modules/FlightSearch/FlightSearch';
import Hero from '@/components/modules/Hero/Hero';
import SearchHistory from '@/components/modules/SearchHistory/SearchHistory';
import React from 'react';

const page = () => {
    return (
        <>
            <Hero />
            <div className='w-[85%] mx-auto'>
                <FlightSearch />
                <SearchHistory />
            </div>
        </>
    );
};

export default page;

