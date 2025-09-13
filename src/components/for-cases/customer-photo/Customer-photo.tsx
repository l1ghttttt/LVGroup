import React from 'react';
import Image from "next/image";

interface CustomerPhotoProps {
    full?: boolean;
    photo: string;
    photoAlt: string;
    higher?: boolean;
}

const CustomerPhoto = ({full = false, photo, photoAlt = `Картинка`, higher = false}: CustomerPhotoProps) => {
    return (
        <>
            {full ? (
                <div
                    className={`w-[100vw] max-2xl:w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                    <Image
                        className={`w-full aspect-[16/6] max-sm:aspect-[16/9] ${higher && "aspect-[16/8] max-sm:aspect-[16/11]"}}  object-cover max-w-full overflow-hidden overflow-x-hidden`}
                        src={`/${photo}`} alt={photoAlt} width={1600}
                        height={900}/>
                </div>
            ) : (
                <div className={`w-[80vw] max-sm:w-[90vw] flex mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px]`}>
                    <Image className={`w-full h-auto rounded-[50px] border-[11px] border-foreground`}
                           src={`/${photo}`} alt={photoAlt} width={1600}
                           height={900}/>
                </div>
            )}
        </>
    );
};

export default CustomerPhoto;