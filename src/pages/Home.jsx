import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Toolkit from '../components/Toolkit'
import FooterRoad from '../components/FooterRoad'

function Home({ theme }) {
  return (
    <>
      <Hero theme={theme} />
      <About />
      <Toolkit />
      <Projects />
      <Contact theme={theme}/>
    </>
  )
}

export default Home