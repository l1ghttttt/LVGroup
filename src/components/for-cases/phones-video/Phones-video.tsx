'use client'

import React, {useEffect, useState} from 'react';
import { motion } from "motion/react"


interface PhonesVideoProps {
    videoList: string[];
}

const PhonesVideo = ({videoList}: PhonesVideoProps) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section
            className={`w-full flex justify-center mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] max-sm:flex-col max-sm:items-center`}>

            {videoList.map((videoName, i) => (
                <div className={`w-1/3 pr-[30px] max-sm:w-3/5 max-sm:p-0 max-sm:mb-[25px]`} key={i}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        transition={{
                            delay: 0.25,
                            duration: 1.5,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`w-full `}>
                        {typeof window !== "undefined" && (
                            <video loop muted autoPlay playsInline
                                   className={`rounded-[30px] border-[8px] border-foreground`}>
                                <source src={`/${videoName}.mp4`} type="video/mp4"/>
                            </video>
                        )}
                    </motion.div>
                </div>
            ))}
        </section>
    );
};

export default PhonesVideo;