import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Toolkit from '../components/Toolkit'

function Home({ theme }) {
  return (
    <>
      <Hero theme={theme} />
      <About />
      <Toolkit />
      <Projects />
      <Contact />
    </>
  )
}

export default Home