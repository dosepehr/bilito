import AboutUsHero from '@/components/templates/aboutUs/AboutUsHero';
import React from 'react';

const page = () => {
    return (
        <>
            <AboutUsHero />
            <div className='w-[85%] mx-auto'>
                <p className='text-gray-8 mt-8'>
                    ما در مجموعه بیلیتو همواره به نظرات، پیشنهادات و سوالات شما
                    عزیزان ارزش قائلیم و مشتاقانه منتظر کمک به شما هستیم.
                </p>
                <p className='text-gray-8 my-8'>
                    درصورتی که سوالی دارید یا نیاز به راهنمایی دارید، لطفا از
                    فرم زیر برای تماس با ما استفاده کنید. تیم پشتیبانی ما در
                    اسرع وقت پاسخگوی شما خواهد بود.
                </p>
            </div>
        </>
    );
};

export default page;
