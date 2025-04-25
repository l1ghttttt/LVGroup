'use client'

import React, { useEffect, useRef, useState } from 'react'
import CasesList from './Cases-list'

interface CasesListWrapperProps {
    name?: string
    onlyHomePage?: boolean
    disableSeeAll?: boolean
}

const CasesListWrapper = ({name="Наши работы", disableSeeAll = false, onlyHomePage = true }:CasesListWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [initialCategory, setInitialCategory] = useState<string | null>(null)
    const parametrName = name
    const parametrdisableSeeAll = disableSeeAll
    const parametronlyHomePage = onlyHomePage
    useEffect(() => {
        const urlCategory = new URLSearchParams(window.location.search).get("category")
        if (urlCategory) {
            const decoded = decodeURIComponent(urlCategory)
            setInitialCategory(decoded)

            // Прокрутка после установки состояния
            setTimeout(() => {
                ref.current?.scrollIntoView({ behavior: "smooth" })
            }, 300)
        }
    }, [])

    return (
        <CasesList ref={ref} name={parametrName} onlyHomePage={parametronlyHomePage} disableSeeAll={parametrdisableSeeAll} initialCategory={initialCategory} />
    )
}

export default CasesListWrapper
