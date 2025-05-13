'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
    images: string[];
    className?: string;
};

export default function HorizontalScrollSlider({ images, className }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        if (!wrapperRef.current || !cardsRef.current.length) return;

        const ctx = gsap.context(() => {
            const horizontalAnim = gsap.to(cardsRef.current, {
                xPercent: -100 * (images.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top top',
                    end: () => '+=' + wrapperRef.current!.offsetWidth,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            imagesRef.current.forEach((img, i) => {
                const isInitiallyVisible = i <= 2;

                if (isInitiallyVisible) {
                    // Показываем первые 3 изображения сразу
                    gsap.set(img, {
                        opacity: 1,
                        x: 0,
                        rotate: 0,
                        scale: 1,
                    });

                    // Анимация исчезновения при прокрутке
                    gsap.to(img, {
                        opacity: 0,
                        x: -150,
                        rotate: -5,
                        scale: 0.95,
                        duration: 1,
                        ease: 'power3.inOut',
                        scrollTrigger: {
                            trigger: img,
                            containerAnimation: horizontalAnim,
                            start: 'left 0',
                            end: 'left -20%',
                            toggleActions: 'play reverse play reverse',
                            invalidateOnRefresh: true,
                        },
                    });
                } else {
                    // Анимация появления остальных изображений
                    gsap.fromTo(
                        img,
                        {
                            opacity: 0,
                            x: 150,
                            rotate: 5,
                            scale: 0.95,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                            scale: 1,
                            duration: 1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: img,
                                containerAnimation: horizontalAnim,
                                start: 'right 135%',
                                end: 'left 15%',
                                toggleActions: 'play reverse play reverse',
                                invalidateOnRefresh: true,
                            },
                        }
                    );
                }
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, [images]);

    return (
        <div ref={wrapperRef} className={`scrolling-wrapper ${className || ''}`}>
            {images.map((img, i) => (
                <div
                    key={i}
                    className="card"
                    ref={(el) => {
                        if (el) cardsRef.current[i] = el;
                    }}
                >
                    <div className={`flex justify-center h-[80vh] ${i % 2 == 0 ? 'items-start' : 'items-end'}`}>
                        <img
                            ref={(el) => {
                                if (el) imagesRef.current[i] = el;
                            }}
                            src={`/${img}`}
                            alt={`Image ${i + 1}`}
                            loading="eager"
                            className="scroll-image"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}