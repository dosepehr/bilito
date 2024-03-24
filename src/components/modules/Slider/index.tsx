'use client';
import { FC, PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

type Breakpoints = {
    [key: number]: {
        slidesPerView: number;
        spaceBetween?: number;
    };
};
type SliderProps = {
    className?: string;
    breakPoints?: Breakpoints;
    navigation?: boolean;
    datas?: any;
};
const Slider: FC<PropsWithChildren<SliderProps>> = ({
    children,
    breakPoints,
    navigation,
    className,
    datas,
}) => {
    return (
        <section>
            <div>
                <Swiper
                    dir='rtl'
                    modules={[Navigation]}
                    slidesPerView={6}
                    breakpoints={breakPoints}
                >
                    <SwiperSlide>{children}</SwiperSlide>
                    <SwiperSlide>{children}</SwiperSlide>
                    <SwiperSlide>{children}</SwiperSlide>
                    <SwiperSlide>{children}</SwiperSlide>
                    <SwiperSlide>{children}</SwiperSlide>
                    <SwiperSlide>{children}</SwiperSlide>
                    <SwiperSlide>{children}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
