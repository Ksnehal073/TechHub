import Hero from '../components/Hero'
import { useEffect } from 'react';
import { useGlobalStyle } from '../context'

const About = () => {
  const { updateAboutPage } = useGlobalStyle();
  useEffect(() => {
    updateAboutPage()
  }, [])
  return (
    <Hero />
  )
}



export default About
