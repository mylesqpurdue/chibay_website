import CustomProfileCard from './CustomProfileCard'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CEO & Co-Founder",
      bio: "Former Google engineer with 10+ years in AI and machine learning. Passionate about building technology that makes a positive impact on society.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        twitter: "https://twitter.com/sarahchen",
        github: "https://github.com/sarahchen"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "CTO & Co-Founder",
      bio: "Full-stack architect and blockchain enthusiast. Previously led engineering teams at Tesla and SpaceX, bringing deep expertise in scalable systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        twitter: "https://twitter.com/marcusrodriguez",
        github: "https://github.com/marcusrodriguez"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Head of Design",
      bio: "Award-winning UX designer with a background in human-computer interaction. She believes great design should be invisible yet transformative.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/emilywatson",
        twitter: "https://twitter.com/emilywatson",
        github: "https://github.com/emilywatson"
      }
    }
  ]

  return (
    <section id="founders" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders with decades of combined experience in technology, 
            design, and innovation, united by a shared mission to shape the future.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div key={founder.id} className="group">
              <CustomProfileCard
                className="h-full bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {founder.title}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={founder.social.linkedin}
                      className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={founder.social.twitter}
                      className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={founder.social.github}
                      className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </CustomProfileCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Founders

