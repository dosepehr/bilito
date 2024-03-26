import React from 'react';
import Image from 'next/image';
import ICONS from '../../../../../public/icons';
const OfferItem = () => {
    return (
        <div className='bg-white border-2 border-gray-3 flex rounded-lg h-20'>
            <Image
                src={'/images/tehran.png'}
                alt=''
                width={80}
                height={80}
                className='h-full rounded-r-lg'
            />
            <div className='flex flex-col'>
                <div className='flex gap-x-2 items-start py-2 px-12 border-b border-gray-3 h-fit'>
                    <p>شیراز</p>
                    <Image
                        src={ICONS.boldAirplane}
                        alt=''
                        width={24}
                        height={24}
                        className=''
                    />
                    <p className='text-blue-primary'>تهران</p>
                </div>
                <div className='flex px-4 items-center justify-center pt-3'>  
                    <p className='text-gray-5 text-sm'>شروع قیمت از</p>
                    <p className='pr-2 pl-1'>۱,۷۰۰,۰۰۰</p>
                    <p className='text-xs' >تومان</p>
                </div>
            </div>
        </div>
    );
};

export default OfferItem;
