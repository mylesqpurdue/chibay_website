import CustomOrb from './CustomOrb'
import { Target, Users, Lightbulb, Rocket } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "Every product we build serves a greater purpose of making technology more accessible and beneficial for everyone."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "People-First",
      description: "We believe that the best technology is built by diverse teams who understand the real needs of real people."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We're not afraid to challenge the status quo and explore new possibilities in the ever-evolving tech landscape."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Growth",
      description: "We're committed to continuous learning, improvement, and scaling our impact to reach more people worldwide."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Chibay
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a tech company. We're dreamers, builders, and innovators 
            working together to create a better digital future.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Mission Statement */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Chibay, we believe technology should empower, not complicate. Our mission is to 
              create innovative solutions that bridge the gap between complex technology and 
              everyday human needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2023, we've been dedicated to building products that not only solve 
              real-world problems but also inspire and delight our users. We're committed to 
              ethical technology development and sustainable business practices.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Join us on our journey to shape the future of technology, one innovative solution at a time.
            </p>
          </div>

          {/* Right Column - Orb Visualization */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600">
            <CustomOrb 
              className="w-full h-full opacity-80"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h4 className="text-2xl font-bold mb-2">Innovation in Motion</h4>
                <p className="text-lg opacity-90">Visualizing the future of technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-purple-600 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

