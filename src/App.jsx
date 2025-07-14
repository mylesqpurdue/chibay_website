// src/App.jsx
import { Toaster }   from 'sonner'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Founders      from './components/Founders'
import Products      from './components/Products'
import About         from './components/About'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import Dither        from './components/Dither'
import './App.css'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Hero stays full-bleed on its own */}
      <Hero />

      {/*
        Only Founders, Products & About get the shared Dither background.
        Everything else (Hero, Contact) lives outside it.
      */}
      <div className="relative">
        {/* 1) Dither fills this block */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Dither
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
            waveSpeed={0.05}
            waveFrequency={3}
            waveAmplitude={0.3}
            waveColor={[0.5, 0.5, 0.5]}
            colorNum={4}
            pixelSize={2}
            disableAnimation={false}
            enableMouseInteraction={false}
          />
        </div>

        {/* 2) Your sections on top of it */}
        <div className="relative z-10">
          <Founders />   {/* must be transparent bg */}
          <Products />   {/* must be transparent bg */}
          <About />      {/* must be transparent bg */}
        </div>
      </div>

      {/* Contact & Footer are separate again */}
      <Contact />
      <Footer />

      <Toaster 
        position="top-right"
        richColors
        closeButton
        theme="dark"
      />
    </div>
  )
}

export default App
