'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function YandexMetrika() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        //@typescript-eslint/ban-ts-comment
        // @ts-expect-error
        ym(101600589, 'hit', url);

    }, [pathname, searchParams])

    return null
}