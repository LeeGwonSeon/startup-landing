import Header from './components/layout/Header'
import Hero from './components/section/HeroSection'
import Features from './components/section/FeaturesSection'
import Pricing from './components/section/PricingSection'
import Footer from './components/layout/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Footer />
        </main>
      </div>
    </ThemeProvider>

  )
}

export default App
