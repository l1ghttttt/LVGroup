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
                transform: `translate(${initialX + offset.x}px, ${initialY + offset.y}px)`,
                zIndex: layer,
                left: Xcoord,
                top: Ycoord,
            }}
            className="absolute bg-background px-4 py-5 rounded-[20px] flex items-start justify-between gap-4 w-[730px] -translate-y-[50%] -translate-x-[50%] transition-transform ease-linear"
        >
            <Image src={`/${image}`} alt="Аватар комментатора" width={70} height={70} className="rounded-[50%]" />
            <p className="text-[24px]">
                <span className="font-bold text-[28px]">{name}</span> {text}
            </p>
            {liked ? <IoHeart size={30} className="translate-y-2" /> : <CiHeart size={35} className="translate-y-2" />}
        </div>
    );
};

export default Comment;