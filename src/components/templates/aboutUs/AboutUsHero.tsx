import React from 'react';

const AboutUsHero = () => {
    return (
        <div className='h-[340px] w-full bg-[url("/images/supportBg.png")] text-white bg-cover bg-no-repeat'>
            <p className='mr-16 pt-11 font-ISBold text-3xl leading-[5rem]'>
                همراه با ما به مسیری از راحتی ، سرعت
                <br className='md:hidden' />و خدمات بی نظیر پرواز کنید
            </p>
        </div>
    );
};

export default AboutUsHero;
