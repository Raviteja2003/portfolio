import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
//import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  

  return (
    <>
      <Header/>
      <div className="px-4 py-2 lg:px-8 lg:py-4">
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
        {/* <Footer/> */} 
      </div>
    </>
  )
}

export default App
