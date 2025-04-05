import React from 'react';

interface FooterTagsProps {
    tags: string[];
}

const FooterTags = ({tags}: FooterTagsProps) => {
    return (
        <ul className={`flex p-casesFilterPadding pr-0 pl-0 flex-wrap gap-2 gap-y-3`}>
            {tags.map((tag, i) => (
                <li key={i}>
                    <button className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        {tag}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FooterTags;