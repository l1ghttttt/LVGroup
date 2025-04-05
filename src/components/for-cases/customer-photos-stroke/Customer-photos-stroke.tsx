import React from 'react';
import Image from "next/image";

interface CustomerPhotosStrokeProps {
    photos: string[];
    photosOnMobile?: string[]
}

const CustomerPhotosStroke = ({photos, photosOnMobile}: CustomerPhotosStrokeProps) => {
    return (
        <>
            <section className='case-gallery mt-[45px] max-lg:mt-[20px] max-xl:hidden'>
                {photos.map((photo, i) => (
                    <Image className={`w-full h-auto`}
                           src={`/${photo}`} alt={`картинка`} width={1600}
                           height={900} key={i} />
                ))}
            </section>
            <section className={`w-[100vw] xl:hidden flex flex-wrap mt-[45px] max-lg:mt-[20px]`}>
                {photos.map((photo, i) => (
                    <div
                        className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`} key={i}>
                        <Image
                            className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                            src={`/${photo}`} alt={`картинка`} width={1600}
                            height={900}/>
                    </div>
                ))}
                {photosOnMobile && photosOnMobile.map((photo, i) => (
                    <div
                        className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`} key={i}>
                        <Image
                            className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                            src={`/${photo}`} alt={`картинка`} width={1600}
                            height={900}/>
                    </div>
                ))}
            </section>
        </>
    );
};

export default CustomerPhotosStroke;