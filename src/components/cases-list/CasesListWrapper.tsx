'use client'

import React, { useEffect, useRef, useState } from 'react'
import CasesList from './Cases-list'

interface CasesListWrapperProps {
    name?: string
    onlyHomePage?: boolean
    disableSeeAll?: boolean
    forcedInitialCategory?: string // 👈 новый пропс
}

const CasesListWrapper = ({
                              name = "Наши работы",
                              disableSeeAll = false,
                              onlyHomePage = true,
                              forcedInitialCategory
                          }: CasesListWrapperProps) => {

    const ref = useRef<HTMLDivElement>(null)
    const [initialCategory, setInitialCategory] = useState<string | null>(null)

    useEffect(() => {
        if (forcedInitialCategory) {
            setInitialCategory(forcedInitialCategory)
            return // 👈 если задан — не читаем из URL и не скроллим
        }

        const urlCategory = new URLSearchParams(window.location.search).get("category")
        if (urlCategory) {
            const decoded = decodeURIComponent(urlCategory)
            setInitialCategory(decoded)

            setTimeout(() => {
                ref.current?.scrollIntoView({ behavior: "smooth" })
            }, 300)
        }
    }, [forcedInitialCategory])

    return (
        <CasesList
            ref={ref}
            name={name}
            onlyHomePage={onlyHomePage}
            disableSeeAll={disableSeeAll}
            initialCategory={initialCategory}
        />
    )
}

export default CasesListWrapper
