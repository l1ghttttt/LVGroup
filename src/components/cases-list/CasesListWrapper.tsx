'use client'

import React, { useEffect, useRef, useState } from 'react'
import CasesList from './Cases-list'

const CasesListWrapper = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [initialCategory, setInitialCategory] = useState<string | null>(null)

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
        <CasesList ref={ref} name="Наши проекты" onlyHomePage={true} disableSeeAll={false} initialCategory={initialCategory} />
    )
}

export default CasesListWrapper
