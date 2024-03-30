import React from 'react';
import Image from 'next/image';
import IMAGES from '../../../../../public/images';
const Services = () => {
    return (
        <div className='flex py-8 bg-tint-1 w-screen mt-[7.5rem] lg:px-56 md:px-20 sm:px-7 justify-between max-w-full'>
            <div className='flex flex-col items-center text-center'>
                <Image src={IMAGES.services1} alt='' width={96} height={96} />
                <p className='mt-8 font-ISMedium'>دسترسی آسان و راحت</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <Image src={IMAGES.services2} alt='' width={96} height={96} />
                <p className='mt-8 font-ISMedium'>پاسخگویی 24 ساعته</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <Image src={IMAGES.services3} alt='' width={96} height={96} />
                <p className='mt-8 font-ISMedium'>خدمات آنلاین</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <Image src={IMAGES.services4} alt='' width={96} height={96} />
                <p className='mt-8 font-ISMedium'>کمترین نرخ خرید بلیط</p>
            </div>
        </div>
    );
};

export default Services;
