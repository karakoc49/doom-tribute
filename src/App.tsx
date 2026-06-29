import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import PlayDoom from './pages/PlayDoom'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import EasterEgg from './components/EasterEgg'
import HUD from './components/HUD'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
      <div className="scanlines"></div>
      <Header />
      <Routes>
        { <Route path="/" element={<Home />} /> }
        { <Route path="/gallery" element={<Gallery />} /> }
        { <Route path="/play-doom" element={<PlayDoom />} /> }
        { <Route path="/about" element={<About />} /> }
      </Routes>
      <EasterEgg />
      <Analytics />
      <SpeedInsights />
      <Footer />
      <HUD />
    </>
  )
}

export default App
