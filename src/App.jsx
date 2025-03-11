import './App.css'
import About from './Pages/About'
import Hero from './Pages/Hero'
import Navbar from './Pages/Navbar'
import EducationRoadmap from './Pages/Education'
import Skills from './Pages/Skills'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

const App =()=> {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <EducationRoadmap/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App
