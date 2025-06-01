"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

interface NumberAnimateProps {
    number: number
    delay?: number
    duration?: number
}

export default function NumberAnimate({
                                          number,
                                          delay = 0,
                                          duration = 2,
                                      }: NumberAnimateProps) {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    const hasAnimated = useRef(false)
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (start && !hasAnimated.current) {
            hasAnimated.current = true
            const controls = animate(count, number, { duration, delay })
            return () => controls.stop()
        }
    }, [start, count, number, delay, duration])

    return (
        <motion.pre
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => setStart(true)}
            viewport={{ once: true, amount: 0.5 }}
        >
            {rounded}
        </motion.pre>
    )
}
