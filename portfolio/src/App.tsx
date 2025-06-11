import React from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Projects from './components/Projects'

type Props = {}

const App = (props: Props) => {
  return (
    <div className='main-body col-12' >
      <Navbar />  
      <Hero />
      <Skills />
      <Timeline />
      <Services />
      <Projects />
    </div>
    
  )
}

export default App