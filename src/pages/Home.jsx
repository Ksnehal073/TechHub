import { useEffect } from 'react';
import Hero from '../components/Hero'
import { useGlobalStyle } from '../context'
import About from './About';
import Contact from './Contact';
import Services from './Services';
const Home = () => {
  const { updateHomePage } = useGlobalStyle();
  useEffect(() => {
    updateHomePage()
  }, [])
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  )
}

export default Home
