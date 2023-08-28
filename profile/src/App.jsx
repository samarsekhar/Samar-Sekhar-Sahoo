import React from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Aboutme from './components/AboutMe/Aboutme';
import ContactMe from './components/ContactMe/ContactMe';
import HomeNavbar from './components/Navbar/Navbar';
import MySKills from './components/MySkills/MySkills';
import MyProjects from './components/MyProjects/MyProjects';

function App() {

  return (
    <>
      <div style={{ position: "relative" }}>
        <HomeNavbar />
        <Home />
        <Aboutme />
        <MySKills />
        <MyProjects />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App
