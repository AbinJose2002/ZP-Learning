
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className='main-body col-12' >
      <Navbar />  
      <Hero />
      <Skills />
      <Timeline />
      <Services />
      <Projects />
      <ContactSection />
    </div>
    
  )
}

export default App