import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin, Linkedin, ExternalLink, User, Briefcase, GraduationCap, Code, Palette, Users, Target } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const projects = [
    {
      title: "El-Mashaer El-Moqdsa",
      description: "Religious platform design with user-centric approach",
      link: "https://www.figma.com/design/aDc7i8jIMgENc49yOzUoBz/El-Mashaer-El-Moqdsa?node-id=0-1",
      tags: ["UI/UX", "Mobile", "Religious"]
    },
    {
      title: "Traps",
      description: "Interactive gaming platform interface design",
      link: "https://www.figma.com/design/IUN3WV9fmDptNsLSEaOhNy/Traps?node-id=0-1",
      tags: ["Gaming", "UI/UX", "Interactive"]
    },
    {
      title: "El-Helol",
      description: "Solutions platform with modern design approach",
      link: "https://www.figma.com/design/JIeZXRpdu8rYTXFfJFFFBi/El-Helol?node-id=0-1",
      tags: ["Web", "Solutions", "Modern"]
    },
    {
      title: "Afaq",
      description: "Certification platform design for enhanced user experience",
      link: "https://www.figma.com/design/UvvGaKfQFgGGUDiphhw1fz/Afaq?node-id=0-1",
      tags: ["Certification", "Enterprise", "UX"]
    },
    {
      title: "Tracking System",
      description: "Real-time tracking interface with intuitive design",
      link: "https://www.figma.com/design/kR9SLgow5fxNzOqbdiOYgd/Tracking?node-id=0-1",
      tags: ["Tracking", "Real-time", "Dashboard"]
    },
    {
      title: "Thiqa",
      description: "Trust-based platform with secure user interface",
      link: "https://www.figma.com/design/PNsVp2K50szqMq80d9zfMO/Thiqa?node-id=1-9010",
      tags: ["Security", "Trust", "Platform"]
    },
    {
      title: "Influencer Platform",
      description: "Social media influencer management system",
      link: "https://www.figma.com/design/SwEm6jjoKkmcHg80twGy37/Influencer?node-id=0-1",
      tags: ["Social Media", "Management", "Influencer"]
    },
    {
      title: "Courses App",
      description: "Educational platform with engaging learning experience",
      link: "https://www.figma.com/design/gUqjv5OAiaAdSbovemdDnX/Courses-App?node-id=0-1",
      tags: ["Education", "Learning", "Mobile"]
    }
  ]

  const experiences = [
    {
      title: "UI/UX Designer",
      company: "AFAQ For Certification And Inspection",
      period: "2024 – Present",
      location: "Nasr City, On-site",
      description: "Designed user flows, wireframes, and prototypes for certification and inspection platforms. Collaborated with developers and business analysts to enhance usability and improve client satisfaction."
    },
    {
      title: "UI/UX Freelancer",
      company: "Freelance",
      period: "Present",
      location: "Remote",
      description: "Delivered design solutions for various clients including mobile and web projects. Created responsive layouts and implemented design systems for consistency."
    },
    {
      title: "UI/UX Designer",
      company: "Route Training",
      period: "Feb 2024 – May 2024",
      location: "Nasr City, On-site",
      description: "Conducted user research and usability testing for educational platforms. Developed interactive prototypes and collaborated with trainers to align designs with learning goals."
    },
    {
      title: "UI/UX Designer - Internship",
      company: "Msar Web",
      period: "Aug 2023 – Nov 2023",
      location: "Menoufia, Hybrid",
      description: "Assisted in developing web application interfaces and contributed to improving user journey. Gained hands-on experience in UI design for web platforms."
    },
    {
      title: "Flutter Developer - Internship",
      company: "Ibtikar Soft",
      period: "Oct 2022 – Dec 2022",
      location: "Jeddah, Remote",
      description: "Supported the development of cross-platform mobile applications using Flutter. Participated in debugging, UI implementation, and feature enhancements."
    }
  ]

  const skills = [
    { name: "User Research", icon: Users },
    { name: "User Flows", icon: Target },
    { name: "Wireframing", icon: Code },
    { name: "Prototyping", icon: Palette },
    { name: "Usability Testing", icon: Users },
    { name: "Design Systems", icon: Target }
  ]

  const tools = ["Figma", "FigJam", "Adobe XD", "Notion"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Nourhan Adel</h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              UI/UX Designer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Creating user-centric and visually compelling digital experiences with 2+ years of expertise in user research, prototyping, and usability testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate UI/UX Designer with over 2 years of experience creating meaningful digital experiences. 
                  I specialize in user research, prototyping, and usability testing, always putting the user at the center of my design process.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  My journey began with a Bachelor's degree in Computer Science from Menoufia University, and I've since worked 
                  with various companies and clients to deliver impactful design solutions.
                </p>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Nasr City, Cairo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Computer Science</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, index) => (
                        <Badge key={index} variant="secondary">{tool}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View on Figma
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to create something amazing? I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">nourhanuiux27899@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">01066467553</p>
              </div>
              <div className="flex flex-col items-center">
                <Linkedin className="h-8 w-8 mb-4 text-blue-400" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/nourhan-adel-90b87723" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://behance.net/nourhanadel12', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Behance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-800 text-gray-300">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nourhan Adel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

