'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const items = [
  { value: '12+', label: 'Years Experience' },
  { value: '8K+', label: 'Properties Sold' },
  { value: '30+', label: 'Agents Trained' },
]

// Хук для проверки размера экрана
function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => setIsLgUp(e.matches)

    setIsLgUp(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isLgUp
}

export default function StatsShowcase() {
  const [index, setIndex] = useState(0)
  const isLgUp = useIsLgUp()

  useEffect(() => {
    if (!isLgUp) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isLgUp])

  if (isLgUp) {
    return (
      <div className="w-full flex justify-between items-center mt-[86px]">
        {/* Левая часть: Аватары и инфо */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <Image className="rounded-full border border-white" src="/avatar1.png" alt="avatar1" width={50} height={50} />
            <Image className="rounded-full border border-white" src="/avatar2.png" alt="avatar2" width={50} height={50} />
            <Image className="rounded-full border border-white" src="/avatar3.png" alt="avatar3" width={50} height={50} />
          </div>
          <div>
            <p className="text-[20px] font-bold text-foreground">16K+</p>
            <p className="text-[16px] text-foreground">User Active</p>
          </div>
        </div>

        {/* Правая часть: карточки */}
        <div className="flex gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-[6px] px-4 bg-secondary text-foreground rounded-[20px] shadow-classic max-w-[300px]">
              <h4 className="text-[24px] text-primary">{item.value}</h4>
              <p className="whitespace-nowrap">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Mobile версия с каруселью
  return (
    <div className="relative w-full overflow-hidden mt-[68px] space-y-[36px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${index * (100 / items.length)}%)`,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 flex justify-center items-center px-4"
            style={{ width: `${100 / items.length}%` }}
          >
            <div className="flex items-center gap-3 py-[6px] px-4 bg-secondary text-foreground rounded-[20px] mx-auto max-w-[300px] shadow-classic">
              <h4 className="text-[24px] text-primary">{item.value}</h4>
              <p className="whitespace-nowrap">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-[63px] h-[3px] rounded-full transition-all duration-300 ${
              index === i ? 'bg-primary' : 'bg-grey'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
