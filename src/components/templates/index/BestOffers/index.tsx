'use client';
import React from 'react';
import OfferDetails from './OfferDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const BestOffers = () => {
    return (
        <>
            <div className='lg:flex gap-x-3 items-stretch justify-between mt-14 hidden'>
                <div className='flex items-stretch gap-x-3 w-2/3 justify-between'>
                    <div className='h-[328px] bg-[url("/images/bestOffers1.png")] w-1/2 bg-no-repeat rounded-lg bg-cover relative'>
                        <OfferDetails
                            title='بهترین فصل شنا'
                            link='خرید بلیط پروازهای کیش'
                            href='ب'
                        />
                    </div>
                    <div className='h-[328px] bg-[url("/images/bestOffers2.png")] w-1/2 bg-no-repeat rounded-lg bg-cover relative'>
                        <OfferDetails
                            title='سفر به ترکیه'
                            link='خرید بلیط پروازهای ترکیه'
                            href='ب'
                        />
                    </div>
                </div>
                <div className='flex items-stretch gap-y-3 flex-col w-1/3 justify-between h-full'>
                    <div className='h-[152px] w-full bg-[url("/images/bestOffers3.png")] bg-no-repeat rounded-lg bg-cover relative'>
                        <OfferDetails
                            title='دنیایی از تاریخ و هنر'
                            link='خرید بلیط پروازهای شیراز'
                            href='ب'
                        />
                    </div>
                    <div className='h-[152px] w-full bg-[url("/images/bestOffers4.png")] bg-no-repeat rounded-lg bg-cover relative'>
                        <OfferDetails
                            title='شگفتی در صحرا'
                            link='خرید بلیط پروازهای دبی'
                            href='ب'
                        />
                    </div>
                </div>
            </div>
            <div className='lg:hidden mt-14'>
                <Swiper
                    dir='rtl'
                    modules={[Navigation]}
                    slidesPerView={1.5}
                    spaceBetween={16}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1.5,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='h-[156px] bg-[url("/images/bestOffers1.png")] bg-no-repeat rounded-lg bg-cover relative'>
                            <OfferDetails
                                title='بهترین فصل شنا'
                                link='خرید بلیط پروازهای کیش'
                                href='ب'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[156px] bg-[url("/images/bestOffers2.png")] bg-no-repeat rounded-lg bg-cover relative'>
                            <OfferDetails
                                title='سفر به ترکیه'
                                link='خرید بلیط پروازهای ترکیه'
                                href='ب'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[156px] w-full bg-[url("/images/bestOffers3.png")] bg-no-repeat rounded-lg bg-cover relative'>
                            <OfferDetails
                                title='دنیایی از تاریخ و هنر'
                                link='خرید بلیط پروازهای شیراز'
                                href='ب'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[156px] w-full bg-[url("/images/bestOffers4.png")] bg-no-repeat rounded-lg bg-cover relative'>
                            <OfferDetails
                                title='شگفتی در صحرا'
                                link='خرید بلیط پروازهای دبی'
                                href='ب'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BestOffers;
