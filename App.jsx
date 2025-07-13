import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Founders from './components/Founders'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Founders />
      <Products />
      <About />
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

