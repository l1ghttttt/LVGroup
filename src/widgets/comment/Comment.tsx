'use client'

import React from 'react';
import Image from "next/image";
import {CiHeart} from "react-icons/ci";
import { IoHeart } from "react-icons/io5";

interface CommentProps {
    Xcoord: string,
    Ycoord: string,
    image: string,
    name: string,
    text: string,
    liked: boolean,
    layer: number
}

const Comment = ({Xcoord, Ycoord, image, name, text, liked, layer}:CommentProps) => {
    return (
        <div
            style={{left: Xcoord, top: Ycoord, zIndex: layer}}
            className="absolute bg-background px-4 py-5 rounded-[20px] flex items-start justify-between gap-4 w-[730px] -translate-y-[50%] -translate-x-[50%]"
        >
            <Image src={`/${image}`} alt="Аватар комментатора" width={70} height={70} className="rounded-[50%]"/>
            <p className="text-[24px]">
                <span className="font-bold text-[28px]">{name}</span> {text}
            </p>
            {liked ? <IoHeart size={30} className="translate-y-2"/> : <CiHeart size={35} className="translate-y-2"/>}
        </div>

    );
};

export default Comment;