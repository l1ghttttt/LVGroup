'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
    images: string[]; // Пример: ['1.jpg', '2.jpg']
};

export default function HorizontalScrollSlider({ images }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!wrapperRef.current || !cardsRef.current.length) return;

        const ctx = gsap.context(() => {
            gsap.to(cardsRef.current, {
                xPercent: -100 * (images.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (images.length - 1),
                    end: () => "+=" + wrapperRef.current!.offsetWidth,
                },
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, [images]);

    return (
        <div ref={wrapperRef} className="scrolling-wrapper">
            {images.map((img, i) => (
                <div
                    key={i}
                    className="card"
                    ref={(el) => {
                        if (el) cardsRef.current[i] = el;
                    }}
                >
                    <img
                        src={`/${img}`}
                        alt={`Card ${i + 1}`}
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}

            <style jsx>{`
        .scrolling-wrapper {
            margin: 10px 0;
            padding: 10vh 85px;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;gap: 85px;
            -webkit-overflow-scrolling: touch;
            width: 100vw;
            height: 3000px;
        }
        .card {
          flex: 0 0 auto;
          width: 80%;
          height: 80vh;
          border: 1px solid #fff;
        }
      `}</style>
        </div>
    );
}
