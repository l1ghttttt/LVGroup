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
    const maxAmplitude = 30;

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
            className="absolute bg-background px-4 py-5 rounded-[20px] flex items-start justify-between gap-5 w-[730px] transition-transform"
        >
            <Image src={`/${image}`} alt="Аватар комментатора" width={75} height={75} className="rounded-[50%] w-[75px] h-[75px]" />
            <p className="text-[26px]">
                <span className="font-bold text-[30px]">{name}</span> {text}
            </p>
            <div className={`w-[30px]`}>
                {liked ? <IoHeart size={30} className="translate-y-2" /> : <CiHeart size={35} className="translate-y-2" />}
            </div>

        </div>
    );
};

export default Comment;