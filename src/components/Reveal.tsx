import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Already in (or near) the viewport on mount: show immediately, no animation dependency
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      setVisible(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)

    // Safety net: never leave content hidden
    const fallback = window.setTimeout(() => setVisible(true), 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div ref={ref} className={`hc-reveal ${visible ? 'hc-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
