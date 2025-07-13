import Orb from './Orb'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('founders').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb 
          className="w-full h-full"
          hue = {0}
          hoverIntensity = {0.3}
          rotateOnHover = {true}
          forceHoverState = {false}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            chibay
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
          Innovating the Future of Tech
        </h2>
        
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          We're building tomorrow's technology today. Join us on our mission to create 
          innovative solutions that transform how people interact with the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={scrollToNext}
          className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero

