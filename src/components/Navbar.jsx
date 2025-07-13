// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home',     href: '#hero'     },
  { name: 'Founders', href: '#founders' },
  { name: 'Products', href: '#products' },
  { name: 'About',    href: '#about'    },
  { name: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileMenuOpen, setMobileMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-16 transition-all
        ${isScrolled ? 'bg-white/10 backdrop-blur-lg border-b border-white/20' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          chibay
        </h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/90 hover:text-white p-2"
          onClick={() => setMobileMenu(o => !o)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white/10 backdrop-blur-lg border-y border-white/20">
          <div className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/90 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
