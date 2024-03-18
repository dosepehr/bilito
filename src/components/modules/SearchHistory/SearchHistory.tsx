import React from 'react';
import Image from 'next/image';
import ICONS from '../../../../public/icons';
import SearchItem from './components/SearchItem';
import Slider from '../Slider';
const SearchHistory = () => {
    return (
        <div>
            <div className='flex items-center justify-between mb-1'>
                <div className='flex items-center gap-x-4'>
                    <Image src={ICONS.history} alt='' width={16} height={16} />
                    <p className='text-gray-8'>تاریخچه جستجو</p>
                </div>
                <p className='text-blue-primary'>پاک کردن همه</p>
            </div>
            <Slider
                breakPoints={{
                    768: {
                        spaceBetween: 5,
                        slidesPerView: 2,
                    },
                }}
            >
                <SearchItem />
            </Slider>
        </div>
    );
};

export default SearchHistory;
