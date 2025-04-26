'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import casesList from '../../app/cases.json'
import categories from '../../app/uslugi.json'

interface CaseItem {
    title: string
    preview: string
    video: boolean
    previewTextWhite: boolean
    tags: string[]
    order: number
    homepage: boolean
    href: string
}

interface Category {
    trigger: string
    values: { title: string }[]
}

interface CasesProps {
    name?: string
    disableSeeAll?: boolean
    onlyHomePage?: boolean
    initialCategory?: string | null
}

// Функция для адаптивного переноса строк
function adaptBr(title: string) {
    return title.replace(
        /<br\s*\/?>/gi,
        '<span class="hidden sm:inline"><br/></span>&nbsp;'
    )
}


const CasesList = React.forwardRef<HTMLDivElement, CasesProps>(
    ({ name = "Наши проекты", disableSeeAll = false, onlyHomePage = false, initialCategory }, ref) => {
        const [mounted, setMounted] = useState(false)
        const [activeCategory, setActiveCategory] = useState<string | null>(null)

        useEffect(() => {
            if (initialCategory) {
                setActiveCategory(initialCategory)
            }
        }, [initialCategory])

        useEffect(() => {
            setMounted(true)
        }, [])

        if (!mounted) return null

        const categoryTags = activeCategory
            ? [
                activeCategory.toLowerCase(),
                ...((categories as Category[]).find(c => c.trigger === activeCategory)?.values.map(v => v.title.toLowerCase()) || [])
            ]
            : []

        let filteredCases = (casesList as CaseItem[])
            .filter(caseItem => (onlyHomePage ? caseItem.homepage : true))

        if (activeCategory && categoryTags.length > 0) {
            filteredCases = filteredCases.filter(item =>
                item.tags?.some(tag => categoryTags.includes(tag.toLowerCase()))
            )
        }

        filteredCases = filteredCases.sort((a, b) => b.order - a.order)

        if (onlyHomePage) {
            filteredCases = filteredCases.slice(0, 8)
        }

        return (
            <section ref={ref} className="w-full flex flex-col bg-background">
                <h2 className="relative p-casesNamePadding leading-none flex items-end justify-stretch sm:w-2/3 text-casesNameSize font-medium">
                    {name}
                </h2>

                {/* Кнопки фильтра категорий */}
                <ul className="flex p-casesFilterPadding flex-wrap gap-2 gap-y-3">
                    {(categories as Category[]).map((cat, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setActiveCategory(prev => prev === cat.trigger ? null : cat.trigger)}
                                className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px] ${activeCategory === cat.trigger ? 'bg-mainColor text-white' : ''}`}
                            >
                                {cat.trigger}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Список кейсов */}
                <ul className="bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]">
                    {filteredCases.map((item, index) => (
                        <li key={`${item.href}-${index}`} className="w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300">
                            <Link href={`/case${item.href}`}>
                                {item.video ? (
                                    <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                                        <source src={`/${item.preview}`} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img className="object-cover absolute left-0 top-0 w-full h-full" src={`/${item.preview}`} alt="" />
                                )}
                                <div className="bg-background w-full h-full p-caseContentPadding">
                                    <p
                                        className={`relative z-25 ${item.previewTextWhite ? 'text-white' : 'text-black'} text-caseTextSize leading-caseTextLeading font-railway`}
                                        dangerouslySetInnerHTML={{ __html: adaptBr(item.title) }}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}

                    {/* Кнопка "Посмотреть все" */}
                    {!disableSeeAll && (
                        <li className="w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300">
                            <div className="w-full h-full">
                                <video autoPlay muted loop playsInline id="myVideo" className="pointer-events-none">
                                    <source src="/SeeAllProjects.mp4" type="video/mp4" />
                                </video>
                                <div className="bg-background p-caseContentPadding w-full h-full flex flex-col justify-between">
                                    <p className="max-2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold">
                                        Посмотреть все <br /> наши проекты
                                    </p>
                                    <p className="max-xl:hidden 2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold">
                                        Посмотреть все наши проекты
                                    </p>
                                    <p className="xl:hidden relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold">
                                        Посмотреть все наши проекты
                                    </p>
                                    <div>
                                        <Link href={`/cases`}>
                                            <button className="relative z-50 font-semibold select-none text-background bg-mainColor hover:bg-darkMain cursor-pointer duration-300 tracking-widest h-[50px] flex items-center justify-center rounded-full px-[30px] font-railway text-[20px]">
                                                <p className="mb-2px">Смотреть</p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
)

CasesList.displayName = 'CasesList'
export default CasesList