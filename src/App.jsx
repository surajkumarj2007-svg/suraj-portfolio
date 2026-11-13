
import Navbar from './components/layout/Navbar.jsx'
import ScrollTop from './components/layout/ScrollTop.jsx'
import AnimatedBackground from './components/layout/AnimatedBackground.jsx'

import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Internship from './components/sections/Internship.jsx'
import Certifications from './components/sections/Certifications.jsx'
import Hackathons from './components/sections/Hackathons.jsx'
import Education from './components/sections/Education.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="portfolio-shell min-h-screen text-[#F7F2FC]">
      <AnimatedBackground />

      <div className="portfolio-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internship />
          <Certifications />
          <Hackathons />
          <Education />
          <Contact />
        </main>

        <ScrollTop />
      </div>
    </div>
  )
}
