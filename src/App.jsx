import './App.css'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import PopularProperties from './components/PopularProperties'
import Promotion from './components/Promotion'
import PropertyList from './components/PropertyList'
import ContactUs from './components/ContactUs'



function App() {

  return (
    <>

      <section className='h-fit md:h-screen w-full'>

        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <Hero />


      </section>

      {/* popular rooms */}
      <PopularProperties />


      {/* property list */}
      <PropertyList />


      {/* promotion */}
      <Promotion />

      {/* contact us */}
      <ContactUs />

      {/* footer */}
      <Footer />

    </>
  )
}

export default App
