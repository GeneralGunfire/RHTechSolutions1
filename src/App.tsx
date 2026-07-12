import Nav from './components/Nav'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import AboutStats from './components/AboutStats'
import LogoCloud from './components/LogoCloud'
import WhyUs from './components/WhyUs'
import Explore from './components/Explore'
import VisualJourney from './components/VisualJourney'
import ClosingStatement from './components/ClosingStatement'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <Gallery />
      <LogoCloud />
      <AboutStats />
      <WhyUs />
      <Explore />
      <VisualJourney />
      <ClosingStatement />
      <Footer />
    </div>
  )
}

export default App
