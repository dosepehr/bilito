'use client';
import { FC, PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
type Breakpoints = {
    [key: number]: {
        slidesPerView: number;
        spaceBetween: number;
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
                    navigation
                    dir='rtl'
                    modules={[Navigation]}
                    breakPoints={breakPoints}
                >
                    <SwiperSlide>{children}</SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;