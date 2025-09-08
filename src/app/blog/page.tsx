import React from 'react';
import BlogWelcome from "@/components/for-blog/Blog-welcome";


const Blog = () => {
    return (
        <main className="w-full flex flex-col items-center">
            <BlogWelcome
                title={`Наш блог`}
                description={`Самый информативный раздел сайта, содержащий как полезную информацию, так и акутальные новости.`}
                background={`WebDeveloping.mp4`}
            />
            <div className={`bg-background h-[900px] w-full`}>

            </div>
        </main>
    );
};

export default Blog;