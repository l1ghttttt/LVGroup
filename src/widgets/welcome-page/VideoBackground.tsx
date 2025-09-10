'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const VideoBackground = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="video-background">
            <video
                autoPlay
                muted
                loop
                playsInline
                id="myVideo"
                className={theme === 'dark' ? '' : 'invert'}
            >
                <source src="/animated-background.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
