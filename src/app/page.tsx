import FlightSearch from '@/components/modules/FlightSearch/FlightSearch';
import Hero from '@/components/modules/Hero/Hero';
import SearchHistory from '@/components/modules/SearchHistory/SearchHistory';
import BestOffers from '@/components/templates/index/BestOffers/BestOffers';
import PapularOffers from '@/components/templates/index/PapularOffers';
import React from 'react';

const page = () => {
    return (
        <>
            <Hero />
            <div className='w-[85%] mx-auto'>
                <FlightSearch />
                <SearchHistory />
                <BestOffers />
                <PapularOffers/>
            </div>
        </>
    );
};

export default page;

