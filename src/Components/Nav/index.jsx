import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './_nav.scss'

export function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [activePage, setActive] = useState('Home')

    function toggleMenu() {
        setIsOpen((prevOpen) => !prevOpen)
    }

    return (
        <>
            <header className="head">
                <h1 className="head__logo">This Interior</h1>
                <ul className={`head__nav ${isOpen ? 'head__nav--active' : ''}`}>
                    <li className="head__nav__item">
                        <NavLink
                            to="/Home"
                            className={`head__nav__item__link ${
                                activePage === 'Home' ? 'head__nav__item__link--active' : ''
                            }`}
                            onClick={() => {
                                setActive('Home')
                                setIsOpen(false)
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Collection' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/Collection"
                            className="head__nav__item__link"
                            onClick={() => {
                                setActive('Collection')
                                setIsOpen(false)
                            }}
                        >
                            Collection
                        </NavLink>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'About' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/About"
                            className="head__nav__item__link"
                            onClick={() => {
                                setActive('About')
                                setIsOpen(false)
                            }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li
                        className={`head__nav__item ${
                            activePage === 'Contact' ? 'head__nav__item--active' : ''
                        }`}
                    >
                        <NavLink
                            to="/Contact"
                            className="head__nav__item__link"
                            onClick={() => {
                                setActive('Contact')
                                setIsOpen(false)
                            }}
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
