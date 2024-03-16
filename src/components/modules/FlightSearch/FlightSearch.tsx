import React from 'react';
import Image from 'next/image';
import ICONS from '../../../../public/icons';
import Button from '../Button/Button';
import FlightOptionsInput from './components/FlightOptionsInput';
const FlightSearch = () => {
    return (
        <div className='p-6 bg-white rounded-lg -mt-28'>
            <div className='flex items-center gap-x-10 w-full pb-[10px] seperator'>
                <p className='text-blue-primary flex gap-x-2'>
                    <Image
                        src={ICONS.activeAirplane}
                        alt=''
                        width={24}
                        height={24}
                    />
                    <span className='font-ISBold'>پرواز داخلی</span>
                </p>
                <p className='text-gray-5 flex gap-x-2'>
                    <Image src={ICONS.airplane} alt='' width={16} height={16} />
                    <span>پرواز خارجی</span>
                </p>
            </div>
            <div className='flex items-center gap-4 mt-6 mb-[30px]'>
                <Button>رفت و برگشت</Button>
                <Button type='secondary' className='w-[98px]'>
                    یک طرفه
                </Button>
            </div>
            <div className='flex items-center gap-6 w-full'>
                <div className='flex items-center gap-1'>
                    <FlightOptionsInput placeHolder='مبدا' />
                    <Image src={ICONS.arrow2} alt='' width={16} height={16} />
                    <FlightOptionsInput placeHolder='مقصد' />
                </div>
                <div className='flex items-center gap-6'>
                    <FlightOptionsInput placeHolder='تاریخ رفت و برگشت' />
                    <FlightOptionsInput placeHolder='تعداد مسافر' />
                    <FlightOptionsInput placeHolder='کلاس پرواز' />
                    <Button>
                        <Image
                            src={ICONS.search}
                            alt=''
                            width={16}
                            height={16}
                            className='ml-2'
                        />
                        <span>جستجو</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FlightSearch;
