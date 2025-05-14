'use client';

import React, { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style-for-swiper.css';
import type { Swiper as SwiperClass } from 'swiper';

type Props = {
    images: string[];
    className?: string;
};

const CustomerImageSwiper = ({ images, className }: Props) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <div className={`relative w-full flex justify-center py-8 ${className || ''}`}>
            {/* Container with reduced width */}
            <div className="relative w-[80%]">
                {/* Custom Navigation Buttons */}
                <button
                    onClick={() => prevRef.current?.click()}
                    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center transition z-20"
                >
                    ←
                </button>
                <button
                    onClick={() => nextRef.current?.click()}
                    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center transition z-20"
                >
                    →
                </button>

                <Swiper
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        const navigation = swiper.params.navigation;
                        if (navigation && typeof navigation !== 'boolean') {
                            navigation.prevEl = prevRef.current;
                            navigation.nextEl = nextRef.current;
                        }
                        swiperRef.current = swiper;
                    }}

                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={`/${img}`}
                                alt={`Image ${i + 1}`}
                                loading="eager"
                                width={800}
                                height={800}
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </SwiperSlide>
                    ))}

                    {/* Invisible native buttons */}
                    <div ref={prevRef} className="swiper-button-prev opacity-0 pointer-events-none" />
                    <div ref={nextRef} className="swiper-button-next opacity-0 pointer-events-none" />
                </Swiper>
            </div>
        </div>
    );
};

export default CustomerImageSwiper;
