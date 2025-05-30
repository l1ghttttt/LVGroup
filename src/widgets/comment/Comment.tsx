'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";

interface CommentProps {
    Xcoord: string;
    Ycoord: string;
    image: string;
    name: string;
    text: string;
    liked: boolean;
    layer: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
}

const Comment = ({ Xcoord, Ycoord, image, name, text, liked, layer, direction = 'up' }: CommentProps) => {
    const initialX = parseFloat(Xcoord);
    const initialY = parseFloat(Ycoord);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const maxAmplitude = 15;

    useEffect(() => {
        const moveComment = () => {
            setOffset(() => {
                switch (direction) {
                    case 'up':
                        return { x: 0, y: Math.sin(Date.now() / 6000) * maxAmplitude };
                    case 'down':
                        return { x: 0, y: -Math.sin(Date.now() / 6000) * maxAmplitude };
                    case 'left':
                        return { x: Math.sin(Date.now() / 6000) * maxAmplitude, y: 0 };
                    case 'right':
                        return { x: -Math.sin(Date.now() / 6000) * maxAmplitude, y: 0 };
                    case 'diagonal':
                        return {
                            x: Math.sin(Date.now() / 6000) * maxAmplitude,
                            y: Math.cos(Date.now() / 6000) * maxAmplitude
                        };
                    default:
                        return { x: 0, y: 0 };
                }
            });
        };

        const interval = setInterval(moveComment, 16);
        return () => clearInterval(interval);
    }, [direction]);

    return (
        <div
            style={{
                transform: `translate(calc(${initialX + offset.x}px - 50%), calc(${initialY + offset.y}px - 50%))`,
                zIndex: layer,
                left: Xcoord,
                top: Ycoord,
            }}
            className="absolute bg-background max-xl:px-4 max-xl:py-4 px-4 py-5 rounded-[20px] max-md:rounded-[10px] flex items-start justify-between max-md:gap-1 max-xl:gap-2 gap-5 max-sm:w-[200px] max-md:w-[250px] max-lg:w-[275px] max-xl:w-[400px] max-2xl:w-[550px] w-[730px] transition-transform max-xl"
        >
            <Image src={`/${image}`} alt="Аватар комментатора" width={75} height={75} className="rounded-[50%] w-[75px] h-[75px] max-xl:w-[60px] max-xl:h-[60px] max-lg:h-[45px] max-lg:w-[45px] max-md:w-[40px] max-md:h-[40px] pointer-events-none select-none" />
            <p className="text-[26px] max-xl:text-[19px] max-lg:text-[16px] max-xl:leading-[1] max-md:leading-[0.95] max-sm:text-[13px]">
                <span className="font-bold text-[30px] max-xl:text-[23px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[15px]">{name}</span> {text}
            </p>
            <div className={`w-[30px] max-xl:w-[20px] max-md:w-[15px]`}>
                {liked ? <IoHeart size={30} className="translate-y-2 max-md:translate-y-[0.75] max-md:w-[20px]" /> : <CiHeart size={35} className="translate-y-2 max-md:translate-y-[0.75] max-md:w-[20px]" />}
            </div>

        </div>
    );
};

export default Comment;