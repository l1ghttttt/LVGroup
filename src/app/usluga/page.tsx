import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <main className="h-[100vh] w-full flex justify-center items-center">
            <Image src={"/in-construct.png"} alt={"Находится в разработке"} width={512} height={394} />
        </main>
    );
};

export default Page;