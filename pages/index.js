import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from './about'
import Services from './services'
import Rates from './rates'
import Quote from './quote'
import Info from './info'
import Contact from './contact'
import Faq from './faq'
import Footer from '../components/Footer'
import FadeInSection from '../components/FadeInSection'

export default function Home() {
  return (
    <div className='main-page overflow-x-hidden'>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Navbar />
      <Hero />
      <FadeInSection>
      <About />
      </FadeInSection>
      <FadeInSection>
      <Services />
      </FadeInSection>
      <FadeInSection>
      <Rates />
      </FadeInSection>
      <FadeInSection>
      <Quote />
      </FadeInSection>
      <FadeInSection>
      <Info />
      </FadeInSection>
      <FadeInSection>
      <Faq />
      </FadeInSection>
      <FadeInSection>
      <Contact />
      </FadeInSection>
      <Footer />
    </div>
  );
}
