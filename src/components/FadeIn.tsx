'use client'

import { useRef, useEffect, useState } from 'react'

type AnimationType = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'fadeDown'

const animations: Record<AnimationType, { from: string; to: string }> = {
  fadeUp: { from: 'opacity-0 translate-y-8', to: 'opacity-100 translate-y-0' },
  fadeDown: { from: 'opacity-0 -translate-y-8', to: 'opacity-100 translate-y-0' },
  fadeIn: { from: 'opacity-0', to: 'opacity-100' },
  slideLeft: { from: 'opacity-0 translate-x-12', to: 'opacity-100 translate-x-0' },
  slideRight: { from: 'opacity-0 -translate-x-12', to: 'opacity-100 translate-x-0' },
  scaleUp: { from: 'opacity-0 scale-95', to: 'opacity-100 scale-100' },
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: AnimationType
  duration?: number
  threshold?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  animation = 'fadeUp',
  duration = 700,
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const { from, to } = animations[animation]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${visible ? to : from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay ? `${delay}ms` : undefined,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  )
}
