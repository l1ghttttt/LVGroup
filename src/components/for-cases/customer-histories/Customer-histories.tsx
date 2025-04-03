import React from 'react';
import {Carousel, CarouselContent, CarouselItem} from "@/shared/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProgressBars from "@/widgets/progress-bar/ProgressBar";
import Image from "next/image";

type photos = string[]

interface CustomerHistoriesProps {
    background?: string,
    photoList: photos[]
}

const CustomerHistories = ({background, photoList}: CustomerHistoriesProps) => {
    return (
        <section
            className={`w-[100vw] bg-[url(/${background})] bg-cover md:aspect-[16/8] flex justify-center gap-[7%] items-center my-[120px] max-md:my-[60px] max-md:flex-col max-md:gap-[50px] max-md:py-[50px] pointer-events-none select-none`}>

            {photoList.map((photos, index) => (
                <div
                    key={index} className={`w-[22%] max-md:w-3/4 overflow-hidden border-white border-solid border-[3px] rounded-[40px] max-lg:border-[3px] max-lg:rounded-[20px] max-sm:border-[2px] max-sm:rounded-[15px]`}>
                    <Carousel
                        className={`w-full`}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4565,
                            }),
                        ]}
                    >
                        <ProgressBars/>
                        <CarouselContent className="-ml-0 md:-ml-0">
                            {photos.map((photo, index) => (
                                <CarouselItem className="p-0" key={index}>
                                    <Image src={`/${photo}`} alt={`фото из карусели`} width={360} height={630} className={`w-full h-full`}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            ))}
        </section>
    );
};

export default CustomerHistories;