// src/components/Founders.jsx
import React from 'react'
import ProfileCard from './ProfileCard'
import Dither from './Dither'

const founders = [
  {
    id: 1,
    name: "JungKook",
    title: "CEO & Co-Founder",
    image: 'images/jungkook.jpg',
    social: {
      linkedin: "https://en.wikipedia.org/wiki/Park_Jimin"
    }
  },
  {
    id: 2,
    name: "A$AP Rocky",
    title: "CTO & Co-Founder",
    image: 'images/asap_rocky.jpg',
    social: {
      linkedin: "https://en.wikipedia.org/wiki/A%24AP_Rocky"
    }
  },
  {
    id: 3,
    name: "Stephen Curry",
    title: "Head of Design",
    image: 'images/steph_curry.jpg',
    social: {
      linkedin: "https://en.wikipedia.org/wiki/Stephen_Curry"
    }
  }
]


export default function Founders() {
  return (
    <section id="founders" className="relative py-20">
      {/* 1) Dither background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Dither
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          waveColor={[0.5, 0.5, 0.5]}
          colorNum={4}
          pixelSize={2}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={1}
        />
      </div>

      {/* 2) Content on top */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Visionary leaders with decades of combined experience in technology,
            design, and innovation.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((f) => (
            <ProfileCard
              key={f.id}
              className="h-full bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              avatarUrl={f.image}
              name={f.name}
              title={f.title}
              handle={f.name.toLowerCase().replace(/\s+/g, '')}
              status="Online"
              contactText="Connect"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open(f.social.linkedin, '_blank')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
