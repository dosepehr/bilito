'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import IMAGES from '../../../../public/images';
import Link from 'next/link';
import ICONS from '../../../../public/icons';
import Sidebar from '../Sidebar';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className='w-[85%] mx-auto flex items-center justify-between py-7'>
                <div className='flex items-center w-full md:w-fit justify-between'>
                    <div onClick={handleSidebar}>
                        <Image
                            src={ICONS.menu}
                            alt=''
                            width={24}
                            height={24}
                            className='md:hidden block'
                        />
                    </div>
                    <div>
                        <Image
                            src={IMAGES.logo}
                            alt='logo'
                            width={150}
                            height={50}
                            className='md:ml-[60px]'
                        />
                    </div>
                    <div className='p-1 bg-tint-1 rounded-[4px] md:hidden block'>
                        <Image
                            src={ICONS.blackUser}
                            alt=''
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='md:flex gap-x-8 items-center hidden'>
                        <Link href='/' className='text-gray-7'>
                            صفحه اصلی
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            بیمه مسافرتی
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            سفرهای من
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            سایر موارد
                        </Link>
                    </div>
                </div>
                <div className='items-center gap-x-6 hidden xl:flex'>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-gray-7'>4045_021 پشتیبانی</p>
                        <Image
                            src={ICONS.call}
                            alt='call'
                            width={24}
                            height={24}
                        />
                    </div>
                    <button className='bg-blue-primary flex items-center gap-x-2 px-4 py-2 rounded-lg '>
                        <Image
                            src={ICONS.user}
                            alt='user'
                            width={16}
                            height={16}
                        />
                        <p className='text-white'>ورود/ ثبت نام</p>
                    </button>
                </div>
            </div>
            <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
        </>
    );
};

export default Header;
