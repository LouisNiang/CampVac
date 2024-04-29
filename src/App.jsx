import { useState } from 'react'
import Header from "./Component/Header/Header"
import Hero from './Component/Hero'
import Companies from "./Component/Companies/Companies"
import Residencies from "./Component/Residencies/Residencies"
import Value from "./Component/Value/Value"
import Contact from "./Component/Contact/Contact"
import GetStarted from "./Component/GetStarted/GetStarted"
import Footer from "./Component/Footer/Footer"
import "./App.css"


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;