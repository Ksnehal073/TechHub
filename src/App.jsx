import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
import Error from './pages/Error'
import GoToTop from './components/GoToTop'



function App() {

  const theme = {
    colors: {
      bg: '#C6CCE0',
      highLight: '#e67e22',
      white: "#fff",
      black: 'black',
      hr: "#ffffff",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      <GoToTop /> 
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
