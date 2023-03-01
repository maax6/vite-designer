import { useState } from 'react'
import './sass/App.scss'

function App() {

  return (
    <div className="App">
      <header>
        <h1 className="logo">This Interior</h1>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__ul__li">
              <a href="/Home" className="nav__ul__li__a">
                Home
              </a>
            </li>
            <li className="nav__ul__li">
              <a href="/Collection" className="nav__ul__li__a">
                Collection
              </a>
            </li>
            <li className="nav__ul__li">
              <a href="/About" className="nav__ul__li__a">
                About
              </a>
            </li>
            <li className="nav__ul__li">
              <a href="/Collection" className="nav__ul__li__a">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
