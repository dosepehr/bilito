import React from 'react';

const Hero = () => {
    return (
        <div className='h-[340px] w-full bg-[url("/images/hero.png")] text-white bg-center bg-cover bg-no-repeat'>
            <p className='mt-11 mr-16 pt-11 font-ISBold text-3xl leading-[5rem]'>
                راحتی و سرعت در
                <br />
                رزرو بلیط هواپیما <br className='sm:hidden' />
                با بیلیتو
            </p>
        </div>
    );
};

export default Hero;
