// src/components/Products.jsx
import { useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Products = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const products = [
    {
      id: 1,
      name: "ChiAI Assistant",
      description: "An intelligent AI-powered assistant that learns from your workflow and helps automate repetitive tasks. Built with advanced natural language processing and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      features: ["Natural Language Processing", "Task Automation", "Learning Algorithms"],
      link: "#"
    },
    {
      id: 2,
      name: "CloudSync Pro",
      description: "Enterprise-grade cloud synchronization platform that ensures your data is always accessible, secure, and synchronized across all devices and platforms in real-time.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      features: ["Real-time Sync", "Enterprise Security", "Multi-platform"],
      link: "#"
    },
    {
      id: 3,
      name: "DataViz Studio",
      description: "Revolutionary data visualization tool that transforms complex datasets into beautiful, interactive charts and dashboards. Perfect for data scientists and business analysts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: ["Interactive Charts", "Real-time Analytics", "Custom Dashboards"],
      link: "#"
    }
  ]

  return (
    <section id="products" className="py-20 bg-transparent">

      {/* 2) Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions designed to empower businesses and individuals 
            with the tools they need to succeed in the digital age.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product, index) => (
                <div key={product.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Details */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {product.description}
                        </p>
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wider">
                            Key Features
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((f, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-400/30"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Button
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 w-fit"
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === selectedIndex
                    ? 'bg-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => emblaApi?.scrollTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
