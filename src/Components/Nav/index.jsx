import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(prevOpen => !prevOpen)
  }

  return (
    <>
      <header className="head">
        <h1 className="head__logo">This Interior</h1>
        <ul className={`head__nav ${isOpen ? 'head__nav--active' : ''}`}>
          <li className="head__nav__item">
            <NavLink
              to="/Home"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="head__nav__item">
            <NavLink
              to="/Collection"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </NavLink>
          </li>
          <li className="head__nav__item">
            <NavLink
              to="/About"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="head__nav__item">
            <NavLink
              to="/Contact"
              activeClassName="head__nav__item__link--active"
              className="head__nav__item__link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={`head__menuIcon ${isOpen ? 'head__menuIcon--open' : ''}`}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="head__menuIcon__burger"></span>
        </div>
      </header>
    </>
  ) 
}
