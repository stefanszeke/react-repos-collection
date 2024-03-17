import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Food from '../Food'

function App() {

  return (
    <div className="App">
      <Header />
      <Food />
      <main>
        <h2>Welcome to my React app</h2>
      </main>
      <Footer />
    </div>
  )
}

export default App
