// import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'


// import TestimonialCarousel from './components/TestimonialCarousel'
import Aboutus from './pages/Aboutus'
import Info from './pages/Info'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testi from './pages/Testi'
import Team from './pages/Team'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
// import Pnf from './pages/Pnf'



const App = () => {
  return (
    

    <>

  

<Router>
    <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}>
    </Route>
    
    
    
    <Route path='/About' element={<Aboutus/>}></Route>
    {/* <Route path='/info' element={<Info/>}></Route> */}
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/team' element={<Team/>}></Route>
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    {/* <Route path='/testimonials' element={<Testi/>}></Route> */}
    <Route path='/contact' element={<Contact/>}></Route>

    
  </Routes>
    
  
  
  <Footer/>
</Router>
      

      
    </>
  )
}

export default App