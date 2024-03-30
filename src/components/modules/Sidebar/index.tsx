import React, { FC } from 'react';
import ICONS from '../../../../public/icons';
import IMAGES from '../../../../public/images';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

type SidebarProps = {
    isOpen: boolean;
    handleSidebar: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpen, handleSidebar }) => {
    return (
        <div
            className={`w-full bg-white absolute -top-[1px] z-10 h-screen max-w-[500px] duration-300 ${
                isOpen ? 'right-0' : '-right-full'
            }`}
        >
            <div className='py-4 flex items-center px-5 border-b border-gray-1'>
                <Image
                    src={ICONS.blackClose}
                    width={24}
                    height={24}
                    alt=''
                    onClick={handleSidebar}
                />
                <Image
                    src={IMAGES.logo}
                    width={96}
                    height={32}
                    alt='logo'
                    className='mx-auto'
                />
            </div>

            <div className='px-6 py-10 space-y-3'>
                <Link href='/' className='flex gap-x-2 text-gray-8 px-2 py-3'>
                    <Image src={ICONS.home} width={16} height={16} alt='' />
                    <p className='text-gray-8'>صفحه اصلی</p>
                </Link>
                <Link href='/' className='flex gap-x-2 text-gray-8 px-2 py-3'>
                    <Image src={ICONS.receipt} width={16} height={16} alt='' />
                    <p className='text-gray-8'>بیمه مسافرتی</p>
                </Link>
                <Link href='/' className='flex gap-x-2 text-gray-8 px-2 py-3'>
                    <Image
                        src={ICONS.airplane2}
                        width={16}
                        height={16}
                        alt=''
                    />
                    <p className='text-gray-8'>سفرهای من</p>
                </Link>
                <Link href='/' className='flex gap-x-2 text-gray-8 px-2 py-3'>
                    <Image src={ICONS.call2} width={16} height={16} alt='' />
                    <p className='text-gray-8'>تماس با ما</p>
                </Link>
                <Link href='/' className='flex gap-x-2 text-gray-8 px-2 py-3'>
                    <Image
                        src={ICONS.userSearch}
                        width={16}
                        height={16}
                        alt=''
                    />
                    <p className='text-gray-8'>درباره ما</p>
                </Link>
                <Link href='/' className='flex gap-x-2 text-gray-8 px-2 py-3'>
                    <Image src={ICONS.frame} width={16} height={16} alt='' />
                    <p className='text-gray-8'>حساب کاربری</p>
                </Link>
                <div className='flex items-center gap-x-2 px-2 py-3'>
                    <p className='text-gray-7'>4045_021 پشتیبانی</p>
                    <Image src={ICONS.call} alt='call' width={24} height={24} />
                </div>
                <Button className='w-full' href='/'>
                    <p className='text-center mx-auto'>ورود/ ثبت نام</p>
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
