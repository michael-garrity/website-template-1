import React from 'react'

import { Header, Blog, About, LearnMore, Features, Footer } from './containers'
import { Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className="main__bg">
          <Navbar />
          <Header />
        </div>
        <About />
        <Features />
        <LearnMore />
        <Blog />
        <Footer />
    </div>
  )
}

export default App