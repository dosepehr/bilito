import FlightSearch from '@/components/modules/FlightSearch';
import Hero from '@/components/modules/Hero';
import SearchHistory from '@/components/modules/SearchHistory';
import BestOffers from '@/components/templates/index/BestOffers';
import PapularOffers from '@/components/templates/index/PapularOffers';
import Services from '@/components/templates/index/Services';
import React from 'react';

const page = () => {
    return (
        <>
            <Hero />
            <div className='w-[85%] mx-auto'>
                <FlightSearch />
                <SearchHistory />
                <BestOffers />
                {/* <PapularOffers /> */}
            </div>
            <Services />
        </>
    );
};

export default page;

