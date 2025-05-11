'use client'

import React, {useEffect, useState} from 'react';

interface CustomerVideoProps {
    video?: string;
}

const CustomerVideo = ({video}: CustomerVideoProps) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`w-[99vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
            <video autoPlay muted loop playsInline
                   className={`w-[100vw] max-w-full overflow-hidden overflow-x-hidden`}>
                <source src={`/${video}.mp4`} type="video/mp4"/>
            </video>
        </div>
    );
};

export default CustomerVideo;