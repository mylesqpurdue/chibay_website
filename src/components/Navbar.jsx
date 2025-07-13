import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import FluidGlass from './FluidGlass'

const navItems = [
  { label: 'Home', link: '#hero' },
  { label: 'Founders', link: '#founders' },
  { label: 'Products', link: '#products' },
  { label: 'About', link: '#about' },
  { label: 'Contact', link: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      {/* Glass behind */}
      <FluidGlass
        mode="bar"
        barProps={{
          navItems,
          transmission: 1,
          roughness: 0,
          thickness: 8,
          ior: 1.15,
          color: '#ffffff',
          attenuationColor: '#ffffff',
          attenuationDistance: 0.25,
        }}
        className="absolute inset-0"
        style={{ pointerEvents: 'none' }}
      />

      <nav
        className={`relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md' : ''
        }`}
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Chibay
        </h1>

        <div className="ml-auto hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="ml-4 md:hidden text-white/90 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="relative z-10 bg-transparent backdrop-blur-md">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="block text-white/90 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
