import React from 'react';
import Image from 'next/image';
import ICONS from '../../../../public/icons';
import IMAGES from '../../../../public/images';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='w-[85%] mx-auto'>
            <div className='flex items-center justify-between pt-6 py-8 border-b border-gray-3'>
                <div className='hidden lg:flex flex-col'>
                    <p className='text-gray-8 font-ISBold'>اپلیکیشن بیلیتو</p>
                    <p className='text-gray-7 mt-2'>
                        با نصب اپلیکیشن بیلیتو راحتی و سرعت در رزرو بلیط هواپیما
                        را داشته باشید.
                    </p>
                </div>
                <div className='lg:flex items-center gap-x-6 hidden'>
                    <div className='text-white flex gap-x-2 bg-shade-2 py-4 px-5 items-center justify-between rounded-[4px]'>
                        <p>Play Store</p>
                        <Image
                            src={ICONS.googlePlay}
                            alt=''
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className='text-white flex gap-x-2 bg-shade-2 py-4 px-5 items-center justify-between rounded-[4px]'>
                        <p>Apple Store</p>
                        <Image
                            src={ICONS.apple}
                            alt=''
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <div className='flex gap-x-6 justify-between w-full lg:hidden'>
                    <div className='text-gray-7'>
                        <p>
                            آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی،
                            خیابان جیحون، طوس غربی.
                        </p>
                        <p className='mt-6'>تلفن پشتیبانی: 98 76 54 32_021</p>
                    </div>
                    <Image
                        src={IMAGES.logo}
                        alt='logo'
                        width={150}
                        height={50}
                        className='mb-8'
                    />
                </div>
            </div>
            <div className='flex pt-8 pb-6 items-start justify-between'>
                <div className='hidden lg:flex flex-col'>
                    <Image
                        src={IMAGES.logo}
                        alt='logo'
                        width={150}
                        height={50}
                        className='mb-8'
                    />
                    <div className='text-gray-7'>
                        <p className='mb-6'>تلفن پشتیبانی: 98 76 54 32_021</p>
                        <p>
                            آدرس دفتر مرکزی: تهران، میدان آزادی، خیابان آزادی،
                            خیابان جیحون، طوس غربی.
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-7 font-ISBold pb-2 border-b border-gray-3'>
                        لینک‌های مفید بیلیتو
                    </p>
                    <div className='mt-4 space-y-2 flex flex-col'>
                        <Link href='/' className='text-gray-7'>
                            درباره ما
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            تماس با ما
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            استرداد بلیط
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            راهنمای خرید بلیط
                        </Link>
                        <Link href='/' className='text-gray-7'>
                            قوانین و مقررات
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:gap-x-6 items-center gap-y-6 lg:hidden'>
                    <div className='text-white flex gap-x-2 bg-shade-2 py-4 px-5 items-center justify-between rounded-[4px] w-full md:w-fit'>
                        <p>Play Store</p>
                        <Image
                            src={ICONS.googlePlay}
                            alt=''
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className='text-white flex gap-x-2 bg-shade-2 py-4 px-5 items-center justify-between rounded-[4px]'>
                        <p>Apple Store</p>
                        <Image
                            src={ICONS.apple}
                            alt=''
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-between pt-6 pb-8'>
                <div className='flex items-center gap-x-6'>
                    <Image src={ICONS.telegram} alt='' width={24} height={24} />
                    <Image src={ICONS.linkedin} alt='' width={24} height={24} />
                    <Image src={ICONS.youtube} alt='' width={24} height={24} />
                    <Image
                        src={ICONS.instagram}
                        alt=''
                        width={24}
                        height={24}
                    />
                    <Image src={ICONS.facebook} alt='' width={24} height={24} />
                    <Image src={ICONS.twitter} alt='' width={24} height={24} />
                </div>
                <div className='flex items-center gap-x-6'>
                    <Image src={ICONS.EP} alt='' width={50} height={50} />
                    <Image src={ICONS.cao} alt='' width={50} height={50} />
                    <Image src={ICONS.aira} alt='' width={50} height={50} />
                    <Image src={ICONS.enamad} alt='' width={50} height={50} />
                    <Image
                        src={ICONS.travellerRights}
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
