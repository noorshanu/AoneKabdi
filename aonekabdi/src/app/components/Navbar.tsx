'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/franchise', label: 'Franchise' },
 


  { href: '/scrap-calculator', label: 'Scrap Calculator' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[100] bg-white backdrop-blur-md border-b border-slate-900/5">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-3">
          <Link href="/" className="flex items-center justify-center md:justify-start" aria-label="Aone Kabadi home">
            <Image
              src="/assets/logo.png"
              alt="Aone Kabadi"
              width={160}
              height={54}
              className="h-[54px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-3 items-center" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-bold px-2.5 py-2 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-green/10 text-green'
                    : 'text-deep hover:bg-green/8'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation - 3 items per row */}
        <nav className="md:hidden w-full grid grid-cols-3 gap-2 pb-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-center font-bold py-2.5 px-2 rounded-lg text-sm border transition-colors ${
                pathname === item.href
                  ? 'bg-green/10 border-green/30 text-green'
                  : 'bg-white border-black/10 text-black hover:bg-green/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

