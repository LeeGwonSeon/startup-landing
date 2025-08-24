import Header from './components/layout/Header'
import Hero from './components/section/HeroSection'
import Features from './components/section/FeaturesSection'
import Pricing from './components/section/PricingSection'
import Footer from './components/layout/Footer'

function App() {

  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
