'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'

interface MarqueeItem {
  id: string
  content: React.ReactNode
}

interface MarqueeProps {
  items?: MarqueeItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  gradient?: boolean
  gradientColor?: string
  pauseOnHover?: boolean
  className?: string
}

const defaultItems: MarqueeItem[] = [
  {
    id: '1',
    content: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <span className="text-white font-bold text-sm">🏆</span>
        <span className="text-white font-semibold">Featured</span>
      </div>
    ),
  },
  {
    id: '2',
    content: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <span className="text-white font-bold text-sm">⭐</span>
        <span className="text-white font-semibold">Trusted</span>
      </div>
    ),
  },
  {
    id: '3',
    content: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <span className="text-white font-bold text-sm">✅</span>
        <span className="text-white font-semibold">Certified</span>
      </div>
    ),
  },
  {
    id: '4',
    content: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <span className="text-white font-bold text-sm">🌱</span>
        <span className="text-white font-semibold">Eco-Friendly</span>
      </div>
    ),
  },
  {
    id: '5',
    content: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <span className="text-white font-bold text-sm">💚</span>
        <span className="text-white font-semibold">Sustainable</span>
      </div>
    ),
  },
  {
    id: '6',
    content: (
      <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <span className="text-white font-bold text-sm">🚀</span>
        <span className="text-white font-semibold">Fast Service</span>
      </div>
    ),
  },
]

export default function CustomMarquee({
  items = defaultItems,
  speed = 50,
  direction = 'left',
  gradient = true,
  gradientColor = 'black',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  // Duplicate items for seamless loop with unique keys
  const duplicatedItems = [
    ...items.map((item, idx) => ({ ...item, uniqueKey: `${item.id}-original-${idx}` })),
    ...items.map((item, idx) => ({ ...item, uniqueKey: `${item.id}-duplicate-${idx}` })),
  ]

  return (
    <div className={`w-full overflow-hidden ${className} bg-black`}>
      <Marquee
        speed={speed}
        direction={direction}
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={50}
        pauseOnHover={pauseOnHover}
        className="py-3"
      >
        {duplicatedItems.map((item, idx) => (
          <div key={item.uniqueKey || `marquee-item-${idx}`} className="mx-3">
            {item.content}
          </div>
        ))}
      </Marquee>
    </div>
  )
}
